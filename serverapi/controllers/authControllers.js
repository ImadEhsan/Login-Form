import User from "../models/authModel.js";
import jwt from 'jsonwebtoken';
import validator from 'email-validator';
import * as config from '../config/config.js';
import { sendingEmail } from "../helpers/emailTemplate.js";
import bcryptjs from 'bcryptjs';
import {nanoid} from 'nanoid';
import responseUserAndToken from "../helpers/userAndTokenResponse.js";

const preSignup = async (req, res) => {
    try {

        const {email, password} = req.body

        //Check both fields are required
        if (!email || !password) {
            return res.json({ 
                ok: false,
                error: 'Please provide both email and password' });
        }

        // Email format shold be valid
        if (!validator.validate(email)) {
            return res.json({ 
                ok: false,
                error: 'Invalid email format' });
        }

        const UserExist = await User.findOne({email});
        if (UserExist) {
            return res.json({ 
                ok: false,
                error: `This email ${email} is already in used` });
        }
        // Token 
        const token = jwt.sign({ email, password }, config.JWT_SECRET, { expiresIn: '2h' });

        console.log(`${config.CLIENT_URL}/verification/${token}`);

        //We are going to send verification link to the receiver email address
        config.AWSSES.sendEmail(
            sendingEmail(
                email,
                'Account verification link',
                `<p>Click on this below link to verify your email: 
                <a href="${config.CLIENT_URL}/verification/${token}">
                Activate Account
                </a></p>`
            ), 
        (err, data) => {
            if (err) {
                console.log(err);
                res.json({ 
                    ok: false,
                    error: 'Failed to send email verification link' + err.message });
            } else {
                console.log('Email sent:', data.MessageId);
                res.json({ 
                    ok: true,
                    message: 'Account verification link has being sent to your email', });
            }
        })
        
    } catch (error) {
        res.json({
            error: 'Something went wrong!',
            error: error.message
        })
        
    }
}

// POST It will decode the token and also extract email and password and save into the db
const signup = async (req, res) => {
    try {

        const {email, password} = jwt.verify(req.body.token, config.JWT_SECRET);
        console.log(email, password);

        const UserExist = await User.findOne({email});
        if (UserExist) {
            return res.json({ error: `This email ${email} is already in used` });
        }

        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const username = "nexskill-"+ nanoid(6)

        //Now create new user into our db
        const newUser = new User({
            email,
            password: hashedPassword,
            username,
        })

        await newUser.save();

        responseUserAndToken(req, res, newUser)
        
    } catch (error) {
        res.json({
            error: 'Something went wrong!',
            error: error.message
        })
        
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        //Check both fields are required
        if (!email || !password) {
            return res.status(401).json({ error: 'Please provide both email and password' });
        }

        // Email format shold be valid
        if (!validator.validate(email)) {
            return res.status(401).json({ error: 'Invalid email format' });
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ error: `Wrong Credentials` });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Wrong Credentials' });
        }

        responseUserAndToken(req, res, user)
        console.log('You are logged in')
        
    } catch (error) {
        res.json({
            error: 'Something went wrong!',
            error: error.message
        })
        
    }
}

// Forget password -- email if you forget password we will sent you password recovery link
const forgetpassword = async (req, res) => {
    try {
        
        const {email} = req.body
        if (!email) {
            return res.status(401).json({ error: 'Please provide your email address' });
        }

        // Email format shold be valid
        if (!validator.validate(email)) {
            return res.status(401).json({ error: 'Invalid email format' });
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ error: `We don't know you` });
        }
        
        const resetPasswordCode = nanoid(15);
        user.resetPasswordCode = resetPasswordCode;
        await user.save()

        // Token 
        const token = jwt.sign({resetPasswordCode}, config.JWT_SECRET, { expiresIn: '2h' });

        console.log(`${config.CLIENT_URL}/access/${token}`);

        //We are going to send verification link to the receiver email address
        config.AWSSES.sendEmail(
            sendingEmail(
                email,
                'Password Recovery link',
                `<p>Click on this below link to activate your email: 
                <a href="${config.CLIENT_URL}/access/${token}">
                Access Account
                </a></p>`
            ), 
        (err, data) => {
            if (err) {
                console.log(err);
                res.json({ error: 'Failed to send email verification link' + err.message });
            } else {
                console.log('Email sent:', data.MessageId);
                res.json({ message: 'Please check your email adddress to activate your account and please change your password'})
            }
        }); 
        
    } catch (error) {
        res.json({
            error: 'Something went wrong!',
            error: error.message
        })
        
    }
}

export { preSignup, signup, login, forgetpassword } 
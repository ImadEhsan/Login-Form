import jwt from 'jsonwebtoken';
import * as config from '../config/config.js';



const responseUserAndToken = (req, res, user) => {
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '4h' });

    user.password = undefined;
    user.resetPasswordCode = undefined;

    return res.json({ok:true, user, token});
}

export default responseUserAndToken;
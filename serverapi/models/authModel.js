import mongoose from "mongoose";

const {Schema, model}  = mongoose

const authSchema = new Schema({

     first_name: {  type: String, default: ''}, 
     last_name: {  type: String, default: ''},
     email: {  type: String, required: true, unique: true},
     password: {  type: String, required: true},
     username: { type: String, default: ''},
     role: {  type: [String], default: ['buyer'] },
     profileImage: {  type: String, default: ''},
     address: { type: String, default: ''},
     phone: { type: String, default: ''},
     company: { type: String, default: ''},
     about: { type: String, default: ''},
     isActive: { type: Boolean, default: true},
     date_of_birth: { type: Date },
     gender: { type: String, default: '' },
     resetPasswordCode: {}



}, {timestamps: true})


const User = model("User", authSchema);

export default User;

// signup 

// pre-signup 

// aws ------   link  OTP  


/// SMS 
////  google map 
/// Email SES 
/// uploading  S3
////  //

/// //// gaming 
///// vi
// 1000+

// amazon - upload - email 

// credit 

// 5$ 

// email 
// uploading

// root user

// usa:

// nayapay


// awab
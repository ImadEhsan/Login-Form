import express from "express";

const userRoute = express.Router();

import * as auth from "../controllers/authControllers.js";

userRoute.route("/pre-signup").post(auth.preSignup);
userRoute.route("/signup").post(auth.signup);
userRoute.route("/login").post(auth.login);
userRoute.route("/login").post(auth.login);
userRoute.route("/forget-password").post(auth.forgetpassword);

export default userRoute;
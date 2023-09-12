import { Router } from "express";
import register from "../controllers/auth/register.js";
import signIn from "../controllers/auth/signIn.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import isValidToken from "../middlewares/isValidToken.js";
import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";
import token from "../controllers/auth/token.js";
import passport from "../middlewares/passport.js";
import signout from "../controllers/auth/signout.js";


let authRouter = Router();


authRouter.post(
    "/register",
    validator(registerSchema),
    existsUser,
    isValidPass,
    register
);

authRouter.post(
    "/signin",
    validator(signinSchema),
    notExistsUser,
    isPassOk,
    isValidToken,
    signIn
);

authRouter.post(
    "/token",
    passport.authenticate("jwt", { session: false }),
    isValidToken,
    token
);

authRouter.post(
    "/signout",
    passport.authenticate("jwt", { session: false }),
    signout
);

export default authRouter;
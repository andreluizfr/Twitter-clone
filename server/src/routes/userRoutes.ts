import { Router } from 'express';
import { Request, Response } from 'express';
import signupController from '../controllers/SignupController';
import loginController from '../controllers/LoginController';
import refreshTokenController from '../controllers/RefreshTokenController';
import logoutController from '../controllers/LogoutController';
import verifyEmailController from '../controllers/VerifyEmailController';
import validateCodeController from '../controllers/ValidateCodeController';

const userRouter = Router();

userRouter.post('/signup', (request: Request, response: Response)=>{
    return signupController.handle(request, response);
});

userRouter.post('/login', (request: Request, response: Response)=>{
    return loginController.handle(request, response);
});

userRouter.post('/refreshToken', (request: Request, response: Response)=>{
    return refreshTokenController.handle(request, response);
});

userRouter.post('/logout', (request: Request, response: Response)=>{
    return logoutController.handle(request, response);
});

userRouter.post('/verifyEmail', (request: Request, response: Response)=>{
    return verifyEmailController.handle(request, response);
});

userRouter.post('/validateCode', (request: Request, response: Response)=>{
    return validateCodeController.handle(request, response);
});

export {userRouter};
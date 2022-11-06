import { Router } from 'express';
import { Request, Response } from 'express';
import sessionController from '../sessionController';
import createUserController from '../controllers/CreateUserController';
import loginController from '../controllers/LoginController';

const userRouter = Router();

userRouter.post('/createUser', (request: Request, response: Response)=>{
    return createUserController.handle(request, response);
});

userRouter.post('/login', (request: Request, response: Response)=>{
    return loginController.handle(request, response);
});

export {userRouter};
import { Request, Response } from 'express';
import { LoginService } from '../use-cases/login/LoginService';
import { UsersRepository } from "../repos/UsersRepository";
import sessionController from '../sessionController';

const usersRepository = new UsersRepository();
const loginService = new LoginService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class LoginController{

    async handle(request: Request, response: Response): Promise<Response>{
        
        const {username, password} = request.body;

        try{
            const user = await loginService.execute({username, password});
            const accessToken = sessionController.createAccessToken(username);
            return response.status(201).send({
                message: "Login succesfull.",
                accessToken: accessToken, 
                user: user
            });
        } catch (err) {
            return response.status(202).send({
                message: err.message || 'Unexpected error.',
                accessToken: null,
                user: null
            });
        } 

    } 

}
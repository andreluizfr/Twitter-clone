import { Request, Response } from 'express';
import { LoginService } from '../use-cases/login/LoginService';
import { UsersRepository, PrivateUser } from "../repos/UsersRepository";

const usersRepository = new UsersRepository();
const loginService = new LoginService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class LoginController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const { username, password } = req.body;

        try{

            const { accessToken, refreshToken, user }  = await loginService.execute({username, password}) as {accessToken: string, refreshToken: string, user: PrivateUser};
            
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                expires: new Date(Date.now() + 604800000)
            });

            return res.status(201).send({
                message: "Login succesfull.",
                accessToken: accessToken,
                user: user
            });

        } catch (err) {

            return res.status(202).send({
                message: err.message || 'Unexpected error.',
                accessToken: null
            });

        } 

    } 

}
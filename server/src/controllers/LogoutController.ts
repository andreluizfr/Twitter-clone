import { Request, Response } from 'express';
import { LogoutService } from '../use-cases/logout/LogoutService';
import { UsersRepository } from "../repos/UsersRepository";

const usersRepository = new UsersRepository();
const logoutService = new LogoutService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class LogoutController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const refreshToken = req.cookies.refreshToken;

        try{

            const user  = await logoutService.execute(refreshToken);

            if(user){
                res.clearCookie("refreshToken");
                return res.status(201).send({
                    message: "Refresh Token has been invalidated."
                });
            } else {
                return res.status(202).send({
                    message: "User or Refresh Token not found."
                });
            }

        } catch (err) {
            return res.status(202).send({
                message: err.message || 'Unexpected error.'
            });
        } 

    } 

}
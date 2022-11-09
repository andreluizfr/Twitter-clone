import { Request, Response } from 'express';
import { VerifyEmailService } from '../use-cases/verifyEmail/VerifyEmailService';
import { UsersRepository } from "../repos/UsersRepository";

const usersRepository = new UsersRepository();
const verifyEmailService = new VerifyEmailService(usersRepository);


//receive a request, calls the use-case, then send back a response
export default new class VerifyEmailController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const { email } = req.body;
        
        try{
            await verifyEmailService.execute(email);
            return res.status(201).send({
                message: "E-mail is valid."
            });
        } catch (error) {
            return res.status(202).send({
                message: error.message || "Error while verifying e-mail.",
            });
        }

    } 

}
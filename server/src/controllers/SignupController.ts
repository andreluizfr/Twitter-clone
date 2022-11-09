import { Request, Response } from 'express';
import { SignupService } from '../use-cases/signup/SignupService';
import { UsersRepository } from "../repos/UsersRepository";


const usersRepository = new UsersRepository();
const signupService = new SignupService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class SignupController{

    async handle(request: Request, response: Response): Promise<Response>{

        const {name, username, email, birthDate, password} = request.body;

        try{

            await signupService.execute({name, username, email, birthDate, password});
            return response.status(201).send({
                message: "User created."
            });

        } catch (err) {

            return response.status(202).json({
                message: err.message || 'Unexpected error.'
            });

        } 

    } 

}
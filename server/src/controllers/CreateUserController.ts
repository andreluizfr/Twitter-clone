import { Request, Response } from 'express';
import { CreateUserService } from '../use-cases/createUser/CreateUserService';
import { UsersRepository } from "../repos/UsersRepository";


const usersRepository = new UsersRepository();
const createUserService = new CreateUserService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class CreateUserController{

    async handle(request: Request, response: Response): Promise<Response>{

        const {firstName, lastName, username, email, password} = request.body;

        try{
            await createUserService.execute({firstName, lastName, username, email, password});
            return response.status(201).send({message: "User created."});
        } catch (err) {
            return response.status(202).json({
                message: err.message || 'Unexpected error.'
            })
        } 

    } 

}
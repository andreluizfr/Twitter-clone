import { Request, Response } from 'express';
import { GetPublicUserInfoService } from '../use-cases/getPublicUserInfo/GetPublicUserInfoService';
import { UsersRepository, PublicUser } from "../repos/UsersRepository";

const usersRepository = new UsersRepository();
const getPublicUserInfoService = new GetPublicUserInfoService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class LoginController{

    async handle(req: Request, res: Response): Promise<Response>{

        try{

            const user  = await getPublicUserInfoService.execute(req.body) as PublicUser;

            return res.status(201).send({
                message: "User found.",
                user: user
            });

        } catch (err) {

            return res.status(202).send({
                message: err.message || 'Unexpected error.',
                user: null
            });

        } 

    } 

}
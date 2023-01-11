import { Request, Response } from 'express';
import { GetPrivateUserInfoService } from '../use-cases/getPrivateUserInfo/GetPrivateUserInfoService';
import { UsersRepository, PrivateUser } from "../repos/UsersRepository";

const usersRepository = new UsersRepository();
const getPrivateUserInfoService = new GetPrivateUserInfoService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class LoginController{

    async handle(req: Request, res: Response): Promise<Response>{

        try{

            const user  = await getPrivateUserInfoService.execute(req.body) as  PrivateUser ;

            return res.status(200).send({
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
import { Request, Response } from 'express';
import { RefreshTokenService } from '../use-cases/refreshToken/RefreshTokenService';
import { UsersRepository } from "../repos/UsersRepository";

const usersRepository = new UsersRepository();
const refreshTokenService = new RefreshTokenService(usersRepository);

//receive a request, calls the use-case, then send back a response
export default new class RefreshTokenController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const refreshToken = req.cookies.refreshToken;

        try{

            const {newAccessToken, newRefreshToken}  = await refreshTokenService.execute(refreshToken);
            
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                expires: new Date(Date.now() + 604800000)
            });

            return res.status(201).send({
                message: "Access token refreshed.",
                accessToken: newAccessToken
            });

        } catch (err) {

            return res.status(202).send({
                message: err.message || 'Unexpected error.',
                accessToken: null
            });

        } 

    } 

}
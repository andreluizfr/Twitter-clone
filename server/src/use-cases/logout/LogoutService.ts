import { IUsersRepository } from "../../repos/IUsersRepository";
import { createAccessToken, createRefreshToken, IjwtPayload } from '../../utils/auth';
import jwt  from "jsonwebtoken";


//contains the business logic
export class LogoutService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(refreshToken: string){

        try {

            const jwtPayload = jwt.verify(refreshToken, process.env.SECRET || 'ssshhhhhhh', {ignoreExpiration: true}) as IjwtPayload;
            const updatedUser = await this.usersRepository.invalidateRefreshToken(jwtPayload.username, refreshToken);
            return updatedUser;
        
        } catch (error) {
            throw new Error("Invalid refresh token.");
        }

    }

}
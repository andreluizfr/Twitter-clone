import { IUsersRepository } from "../../repos/IUsersRepository";
import { createAccessToken, createRefreshToken, IjwtPayload } from '../../utils/auth';
import jwt  from "jsonwebtoken";


//contains the business logic
export class RefreshTokenService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(refreshToken: string){

        let username;

        try {
            const jwtPayload = jwt.verify(refreshToken, process.env.SECRET || 'ssshhhhhhh') as IjwtPayload;
            username = jwtPayload.username;
        } catch (error) {
            throw new Error("Invalid Refresh Token, please log in.");
        }

        const user = await this.usersRepository.findByRefreshToken(username, refreshToken);

        if(user){
            
            const newRefreshToken = createRefreshToken(username);
            const updatedUser = await this.usersRepository.refreshToken(username, newRefreshToken);

            if(!updatedUser)
                throw new Error("Error by updating the refresh token from User DB.");
            else{
                const newAccessToken = createAccessToken(username);
                return {newAccessToken: newAccessToken, newRefreshToken: newRefreshToken};
            }
                
        } else {
            throw new Error("Invalid Refresh Token for this user");
        }

    }

}
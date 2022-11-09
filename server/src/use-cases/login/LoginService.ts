import { IUsersRepository } from "../../repos/IUsersRepository";
import { createAccessToken, createRefreshToken } from '../../utils/auth';

export interface ILoginRequest{
    username: string;
    password: string;
}
//contains the business logic
export class LoginService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(data: ILoginRequest){

        const user = await this.usersRepository.findByUsername(data.username);

        if(user){

            if(user.password!==data.password)
                throw new Error("Username or password is incorrect!");

            else{

                const accessToken = createAccessToken(data.username);
                const refreshToken = createRefreshToken(data.username);

                const updatedUser = await this.usersRepository.refreshToken(data.username, refreshToken);

                if (updatedUser){
                    const {userId, refreshToken, created_at, ...privateUser} = updatedUser;

                    return {accessToken: accessToken, refreshToken: refreshToken, user: privateUser };
                }
                    
            }
                
        }
        else throw new Error("Username or password is incorrect!");

    }
}
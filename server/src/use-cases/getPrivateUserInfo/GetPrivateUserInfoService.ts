import { IUsersRepository } from "../../repos/IUsersRepository";
import { PrivateUser } from "../../repos/UsersRepository";

export interface IGetPrivateUserInfoRequest{
    auth: boolean
    authMessage: string
    message: string
    username: string;
}
//contains the business logic
export class GetPrivateUserInfoService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(data: IGetPrivateUserInfoRequest){

        const user = await this.usersRepository.findByUsername(data.username);

        if(user){

            const {userId, refreshToken, created_at, ...privateUser} = user;
            return privateUser;
                
        }
        else throw new Error("User not found!");

    }

}
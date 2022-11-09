import { IUsersRepository } from "../../repos/IUsersRepository";
import { PublicUser } from "../../repos/UsersRepository";

export interface IGetPublicUserInfoRequest{
    auth: boolean
    authMessage: string
    message: string
    username: string;
}
//contains the business logic
export class GetPublicUserInfoService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(data: IGetPublicUserInfoRequest){

        const user = await this.usersRepository.findByUsername(data.username);

        if(user){

            const {userId, email, birthDate, password, refreshToken, created_at, ...publicUser} = user;
            return publicUser;
                
        }
        else throw new Error("User not found!");

    }

}
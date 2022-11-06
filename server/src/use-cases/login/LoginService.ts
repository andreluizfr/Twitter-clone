import { IUsersRepository } from "../../repos/IUsersRepository";

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
            else
                return user;
        }
        else throw new Error("Username or password is incorrect!");

    }
}
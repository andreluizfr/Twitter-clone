import { User } from "../../entities/User";
import { IUsersRepository } from "../../repos/IUsersRepository";

export interface ICreateUserRequest{
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}
//contains the business logic
export class CreateUserService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(data: ICreateUserRequest){
        const userAlreadyExists = await this.usersRepository.findByUsername(data.username);

        if(userAlreadyExists)
            throw new Error('User already exists!');

        const emailAlreadyExists = await this.usersRepository.findByEmail(data.username);

        if(emailAlreadyExists)
            throw new Error('Email already exists!');

        const user = new User(data);

        const userCreated = await this.usersRepository.createUser(user);
        if(!userCreated)
            throw new Error("User couldn't be created!");

    }
}
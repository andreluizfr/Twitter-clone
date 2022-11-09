import { User } from "../../entities/User";
import { IUsersRepository } from "../../repos/IUsersRepository";
import { redisGet } from "../../redis/config";

export interface ISignupRequest{
    name: string;
    username: string;
    email: string;
    birthDate: string;
    password: string;
}
//contains the business logic
export class SignupService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(data: ISignupRequest){

        const userAlreadyExists = await this.usersRepository.findByUsername(data.username);
        if(userAlreadyExists)
            throw new Error('User already exists!');

        const emailAlreadyExists = await this.usersRepository.findByEmail(data.username);
        if(emailAlreadyExists)
            throw new Error('Email already exists!');

        if(data.password.length<8 || data.password.length>30)
            throw new Error('Password length is wrong!');

        const objString = await redisGet(data.email);

        if(objString){

            const obj = JSON.parse(objString);
            
            const now = new Date();

            if(!obj.validated)
                throw new Error("Email wasn't validated.");

            if(now.getTime() > obj.validatedExp)
                throw new Error("Time to create account with validated email has expired.");

            const user = new User(data);
            const userCreated = await this.usersRepository.createUser(user);
            
            if(!userCreated)
                throw new Error("User couldn't be created!");
            else
                console.log(JSON.stringify(userCreated));  //success

        } else {
            throw new Error("Email wasn't validated.");
        }

    }
}
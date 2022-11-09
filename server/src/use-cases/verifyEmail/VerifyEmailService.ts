import { IUsersRepository } from "../../repos/IUsersRepository";
import { redisSet } from "../../redis/config";
import { sendCodeToEmail } from "../../utils/sendEmail";

//contains the business logic
export class VerifyEmailService{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(email: string){

        const user = await this.usersRepository.findByEmail(email);

        if(user){

            throw new Error("Email already exists.");

        } else {
            
            const min = 0
            const max = 999999
            const verificationCode = (Math.floor( Math.random() *  (max - min + 1) ) + min).toString();
            console.log("the verification code for",email,"is", verificationCode);
            
            const currentDate = new Date();
            const ExpDate = currentDate.getTime() + 300000; //5minutos para validar código

            const valueObj = {
                verificationCode: verificationCode,
                ExpDate: ExpDate,
                validated: false,
                validatedExp: 0
            }

            const valueString = JSON.stringify(valueObj);

            await redisSet(email, valueString);

            await sendCodeToEmail(email, verificationCode);

        }

    }


}
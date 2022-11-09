import { redisGet, redisSet } from "../../redis/config";

//contains the business logic
export class ValidateCodeService{

    constructor (){}

    async execute(email: string, verificationCode: string){

        const value = await redisGet(email);

        if(value){
            
            const obj = JSON.parse(value);
            
            const now = new Date();

            if(verificationCode !== obj.verificationCode)
                throw new Error("Verification Code is Wrong.");

            if(now.getTime() > obj.ExpDate)
                throw new Error("Verification Code has Expired.");

            obj.validated = true;
            obj.validatedExp = now.getTime() + 300000  //5 minutos para criar conta depois de codigo validado
            const objString = JSON.stringify(obj);
            await redisSet(email, objString);

        } else {
            throw new Error("Error while searching for your code, try it again later.");
        }

    }

}
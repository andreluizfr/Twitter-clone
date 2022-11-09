import { Request, Response } from 'express';
import { ValidateCodeService } from '../use-cases/validateCode/ValidateCodeService';

const validateCodeService = new ValidateCodeService();

//receive a request, calls the use-case, then send back a response
export default new class ValidateCodeController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const { email, verificationCode } = req.body;

        try{
            await validateCodeService.execute(email, verificationCode);
            return res.status(201).send({
                message: "Verification Code is right."
            });
        } catch (error) {
            return res.status(202).send({
                message: error.message || "Error while validating code.",
            });
        }

    } 

}
import nodemailer from 'nodemailer';

/*
export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2b4692042ae141",
      pass: "0bb89dead34d83"
    }
});
*/

export const transport = nodemailer.createTransport({ 
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false, 
    auth: { 
       user: process.env.EMAIL_USER, 
       pass: process.env.EMAIL_PASS
     } 
});

export async function sendCodeToEmail(email: string, verificationCode: string) {

    let message = await transport.sendMail({
        from: '<noreplay@twitter.com>', // sender address
        to: email, // list of receivers
        subject: verificationCode + " é o seu código de verificação do Twitter", // Subject line
        text: "Insira este código de verificação para começar a usar o twitter: "+verificationCode, // plain text body
        html: "<div><h1><b>Confirme seu endereço de e-mail</b></h1></div><div>Insira este código de verificação para começar a usar o twitter:</div><div><h2>"
                +verificationCode+
               "</h2></div>", // html body
    });

    console.log(message);

}


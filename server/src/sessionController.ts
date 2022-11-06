import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface IjwtPayload {
    username: string
    expiresIn: string;
}

export default new class SessionController {

    private userSessions : {
        [key: string]: Array <string>
    }

    constructor () {
        this.userSessions = {}
    }

    createAccessToken (username: string) {

        const accessToken = jwt.sign({ username: username }, process.env.JWT_SECRET || 'ssshhhhhhh', {
            expiresIn: process.env.JWT_EXP || 86400 // expires in one day
        });

        if(this.userSessions[username])
            this.userSessions[username].push(accessToken);
        else
            this.userSessions[username] = [accessToken];

        return accessToken;
    }

    invalidateSession (username: string, accessToken: string) {

        const index = this.userSessions.username.indexOf(accessToken);
        if (index > -1) 
            this.userSessions[username].splice(index, 1);
        
    }

    verifyJWT (req : Request, res: Response, next: NextFunction) {

        //dando uma olhada na tabela de sessões
        console.log(JSON.stringify(this.userSessions));

        const accessToken = JSON.stringify(req.headers['x-access-token']);

        if (!accessToken){

            return res.send({auth: false, authMessage: 'No token provided.'});

        } 

        try {

            const jwtPayload = jwt.verify(accessToken, process.env.SECRET || 'ssshhhhhhh') as IjwtPayload;
            req.body.username = jwtPayload.username;

            //trocando token antigo por um novo
            this.invalidateSession(jwtPayload.username, accessToken);
            const newAccessToken = this.createAccessToken(jwtPayload.username);

            //repassando essas informaçoes pelo req pra rota
            req.body.auth = true;
            req.body.authMessage = 'Succesfull authentication with Access Token.';
            req.body.newAccessToken = newAccessToken;
            next();

        } catch (err) {
            
            if(err.name === 'TokenExpiredError') {

                //retirar sessão que estava ativa do usuário em questão
                const jwtPayload = jwt.verify(accessToken, process.env.SECRET || 'ssshhhhhhh', {ignoreExpiration: true}) as IjwtPayload;
                this.invalidateSession(jwtPayload.username, accessToken);

                req.body.auth = false;
                req.body.authMessage = 'Your access token has expired, try logging again.';
                return res.send({auth: false, authMessage: 'No token provided.'});

            } else {

                req.body.responseObject.auth = false;
                req.body.responseObject.authMessage = 'Invalid access token, you need logging again.';
                return res.send({responseObject: req.body.responseObject});

            }
        
        }

    }

}
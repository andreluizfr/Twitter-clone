import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface IjwtPayload {
    username: string
    expiresIn: string;
}

export function createAccessToken (username: string) {

    const accessToken = jwt.sign({ username: username }, process.env.JWT_SECRET || 'ssshhhhhhh', {
        expiresIn: process.env.JWT_EXP || 900 // expires in 15 min
    });

    return accessToken;
}

export function createRefreshToken (username: string) {

    const refreshToken = jwt.sign({ username: username }, process.env.JWT_SECRET || 'ssshhhhhhh', {
        expiresIn: process.env.JWT_EXP || 604800 // expires in one week
    });

    return refreshToken;
}


export function authentication (req : Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.send({auth: false, authMessage: 'No token provided.'});

    const [ , accessToken] = authHeader.split(" ");

    try {

        const jwtPayload = jwt.verify(accessToken, process.env.SECRET || 'ssshhhhhhh') as IjwtPayload;
        
        //repassando essas informaçoes pelo req pra rota solicitada
        req.body.username = jwtPayload.username;
        req.body.auth = true;
        req.body.authMessage = 'Succesfull authentication with Access Token.';
        next();

    } catch (err) {
        
        if(err.name === 'TokenExpiredError') {

            return res.send({
                auth: false,
                refresh: true,
                authMessage: 'You need to refresh your accessToken.'
            });

        } else {

            return res.send({
                auth: false,
                refresh: false,
                authMessage: 'Invalid access token, you need logging again.'
            });

        }
    
    }

}

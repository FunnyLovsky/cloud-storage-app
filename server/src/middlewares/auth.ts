import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface IUser {
    id: number
}

export interface AuthRequest extends Request {
    user?: IUser
}

export default function(req: AuthRequest, res: Response, next: NextFunction) {
    if(req.method === 'OPTION') {
        next()
    }

    try {
        const authorizateHeader = req.headers.authorization

        if(!authorizateHeader) {
            return res.status(401).json({message: 'Auth Eror'})
        }

        const token = authorizateHeader.split(' ')[1];

        if(!token) {
            return res.status(401).json({message: 'Auth Eror'})
        }

        const userData = jwt.verify(token, process.env.JWT_SECRET_KEY!) as IUser;

        req.user = userData
        next()
    } catch (error) {
        return res.status(401).json({message: 'Auth Eror'})
    }
}
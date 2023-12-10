import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export default class AuthController {

    static async registration(req: Request, res: Response) {
        try {
            const errors = validationResult(req);
    
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Unccorect request', errors})
            }

            const {email, password} = req.body;
            const candidate = await User.findOne({email});
    
            if(candidate) {
                return res.status(400).json({message: `User with email ${email} already exist`})
            }
    
            const hashPass = await bcrypt.hash(password, 3)
    
            await User.create({email, password: hashPass});
            return res.status(200).json({message: 'User was created!'})
        } catch (e: any) {
            console.log(e);
            return res.status(500).json({message: 'Server Error'})
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});

            if(!user) {
                return res.status(404).json({message: `User with email ${email} not found`})
            }

            const isValidPass = await bcrypt.compare(password, String(user.password));

            if(!isValidPass) {
                return res.status(400).json({message: `Password unccorect`})
            }

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY!, {expiresIn: '1h'})

            return res.status(200).json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatat: user.avatar
                }
            })

        } catch (e: any) {
            console.log(e);
            return res.status(500).json({message: 'Server Error'})
        }
    }
}
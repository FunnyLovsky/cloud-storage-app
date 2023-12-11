import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { AuthRequest } from "../middlewares/auth";
import FileService from "../service/fileService";
import File from "../models/File";

export default class AuthController {

    static async registration(req: Request, res: Response) {
        try {
            const errors = validationResult(req);
    
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Некорректный запрос', errors})
            }

            const {email, password, name} = req.body;
            const candidate = await User.findOne({email});
    
            if(candidate) {
                return res.status(400).json({message: `Пользователь с email ${email} уже существует!`})
            }
    
            const hashPass = await bcrypt.hash(password, 3)
            const user = new User({email, password: hashPass, name})
            await user.save();
            await FileService.createDir(new File({user: user._id, name: ''}))
            return res.status(200).json({message: 'Пользователь был создан!'})
        } catch (e: any) {
            console.log(e);
            return res.status(500).json({message: 'Непрелвиденная ошибка'})
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});

            if(!user) {
                return res.status(404).json({message: `Пользователь с email ${email} не найден`})
            }

            const isValidPass = await bcrypt.compare(password, String(user.password));

            if(!isValidPass) {
                return res.status(400).json({message: `Пароль некорректный`})
            }

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY!, {expiresIn: '1h'})

            return res.status(200).json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatat: user.avatar
                }
            })

        } catch (e: any) {
            console.log(e);
            return res.status(500).json({message: 'Непредвиденная ошибка'})
        }
    }

    static async auth(req: AuthRequest, res: Response) {
        try {
            const user = await User.findOne({_id: req.user?.id});

            if(!user) {
                return res.status(400).json({message: `Пользователь не найден`})
            }

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY!, {expiresIn: '1h'})

            return res.status(200).json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatat: user.avatar
                }
            })

        } catch (e: any) {
            console.log(e);
            return res.status(500).json({message: 'Непредвиденная ошибка'})
        }
    }
}
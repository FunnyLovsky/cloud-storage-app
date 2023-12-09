import { Request, Response, Router } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt'

const router = Router()

router.post('/registration', async (reg: Request, res: Response) => {
    try {
        const {email, password} = reg.body;
        const candidate = await User.findOne({email});

        if(candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }

        const hashPass = bcrypt.hash(password, 7)

        await User.create({email, password: hashPass});
        return res.status(200).json({message: 'User was created!'})
    } catch (e: any) {
        console.log(e.name + e.message);
        return res.status(500).json({message: 'Server Error'})
    }
})

export default router;
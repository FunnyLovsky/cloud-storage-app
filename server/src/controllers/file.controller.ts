import { Request, Response } from "express";
import File from "../models/File";
import User from "../models/User";
import FileService from "../service/fileService";
import { AuthRequest } from "../middlewares/auth";


export default class FileController{
    static async createDir(req: AuthRequest, res: Response) {
        try {
            const {name, type, parent} = req.body;
            const file = new File({name, type, parent, user: req.user?.id});
            const parentFile = await File.findOne({_id: parent});

            if(!parentFile) {
                file.path = name;
                await FileService.createDir(file)
            } else {
                file.path = `${parentFile.path}/${file.name}`;
                await FileService.createDir(file);
                parentFile.child.push(file._id);
                await parentFile.save()
            }
            await file.save();
            return res.status(200).json(file)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}
import { Request, Response } from "express";
import File from "../models/File";
import User from "../models/User";
import FileService from "../service/fileService";
import { AuthRequest } from "../middlewares/auth";
import { UploadedFile } from "express-fileupload";
import path from "path";
import fs from "fs";


export default class FileController{
    static async createDir(req: AuthRequest, res: Response) {
        try {
            const {name, type, parent} = req.body;
            const file = new File({name, type, parent, user: req.user?.id, date: Date.now()});
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

    static async fethFile(req: AuthRequest, res: Response) {
        try {
            const files = await File.find({user: req.user?.id, parent: req.query.parent})
            return res.status(200).json(files)
        } catch (error: any) {
            return res.status(500).json({message: 'Ошибка при получении файла'})
        }
    }

    static async uploadFile(req: AuthRequest, res: Response) {
        try {
            const files = req.files?.file;
            let file = {} as UploadedFile;
            let pathFile;
            let filePath = file.name;

            if(!Array.isArray(files)) {
                file = files as UploadedFile
            }
            
            const parent = await File.findOne({user: req.user?.id, _id: req.body.parent});
            const user = await User.findOne({_id: req.user?.id});

            if(user!.usedSpace + file.size > user!.diskSpace) {
                return res.status(400).json({message: 'На диске нет свободного места'})
            }

            user!.usedSpace += file.size;

            if(parent) {
                pathFile = path.resolve(__dirname, '..', 'files', `${user?.id}`, `${parent.path}`, `${file.name}`)
            } else {
                pathFile = path.resolve(__dirname, '..', 'files', `${user?.id}`, `${file.name}`)
            }

            if(fs.existsSync(pathFile)) {
                return res.status(400).json({message: 'Файл уже создан'})
            }
            
            file.mv(pathFile);

            const type = file.name.split('.').pop();

            if(parent) {
                filePath = `${parent.path}/${file.name}`
            }

            const dbFile = new File({
                name: file.name,
                type,
                size: file.size,
                path: filePath,
                parent: parent?.id,
                user: user?.id
            })

            await dbFile.save()
            await user?.save();

            return res.status(200).json(dbFile);
            
        } catch (error: any) {
            return res.status(500).json({message: 'Ошибка при загрузки файла'})
        }
    }

    static async downloadFile(req: AuthRequest, res: Response) {
        try {
            const file = await File.findOne({_id: req.query.id, user: req.user?.id});
            const pathFile = path.resolve(__dirname, '..', 'files', `${req.user?.id}`, `${file?.path}`, `${file?.name}`);
            
            if(fs.existsSync(pathFile)) {
                return res.status(200).download(pathFile, file!.name);
            }

            return res.status(400).json({message: 'Ошибка при скачивании файла'})
        } catch (error) {
            return res.status(500).json({message: 'Ошибка при скачивании файла'})
        }
    }

    static async deleteFile(req: AuthRequest, res: Response) {
        try {
            const file = await File.findOne({_id: req.query.id, user: req.user?.id});
            
            if(!file) {
                return res.status(400).json({message: 'Файл не был найден'})
            }
            
            FileService.deleteFile(file);
            await file.deleteOne();
            return res.status(200).json({message: 'Файл был удален'})
        } catch (error) {
            return res.status(500).json({message: 'Ошибка при удалении файла'})
        }
    }
}
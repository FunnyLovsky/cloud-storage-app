import fs from "fs";
import File, { TFile } from "../models/File";
import path from "path";

type Tvalue = {
    message: string
}

export default class FileService {

    static createDir(file: TFile) {
        const filePath = this.getPath(file);
        return new Promise((resolve: (value: Tvalue) => void, reject: (value: Tvalue) => void) => {
            try { 
                if(!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'Файл был создан'})
                } else {
                    return reject({message: 'Файл уже создан'})
                }
            } catch (error) {
                return reject({message: 'File Error'})
            }
        })
    }

    static deleteFile(file: TFile) {
        try {
            const path = this.getPath(file);

            if(file.type === 'dir') {
                fs.rmdirSync(path)
            } else {
                fs.unlinkSync(path + '/' + file.name)
            }

        } catch (error: any) {
            throw Error(error.message)
        }
    }

    static getPath(file: TFile) {
        return path.resolve(__dirname, '..', 'files', `${file.user}`, `${file.path}`)
    }
}
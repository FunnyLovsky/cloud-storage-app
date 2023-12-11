import fs from "fs";
import File, { TFile } from "../models/File";
import path from "path";

type Tvalue = {
    message: string
}

export default class FileService {

    static createDir(file: TFile) {
        const filePath = path.resolve(__dirname, '..', 'files', `${file.user}`, `${file.path}`)
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
}
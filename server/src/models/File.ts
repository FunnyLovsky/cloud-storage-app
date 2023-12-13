import { Schema, model, Types, Document } from "mongoose";
import { IUser } from "./User";
 
export const ObjectId = Types.ObjectId;

export interface IFile {
    name: string,
    type: string,
    accessLink: string,
    size: number,
    path: string,
    user: IUser,
    date: Date,
    parent: IFile,
    child: IFile[],
}

export type TFile = IFile & Document<IFile>

const File = new Schema<TFile>({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type: String},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
    user: {type: ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now() },
    parent: {type: ObjectId, ref: 'File'},
    child: [{type: ObjectId, ref: 'File'}]
})

export default model('File', File)
import { Schema, model, Types, Document } from "mongoose";
import { IFile } from "./File";
 
export const ObjectId = Types.ObjectId;

export interface IUser{
    _id: number,
    email: string,
    name: string,
    password: string,
    diskSpace: number,
    usedSpace: number,
    avatar: string,
    files: IFile[]
}

type TUser = IUser & Document<IUser>

const User = new Schema<TUser>({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
    avatar: {type: String},
    files: [{type: ObjectId , ref: 'File'}]
})

export default model('User', User)
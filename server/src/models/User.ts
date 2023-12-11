import { Schema, model, Types } from "mongoose";
 
export const ObjectId = Types.ObjectId;

const User = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
    avatar: {type: String},
    files: [{type: ObjectId , ref: 'File'}]
})

export default model('User', User)
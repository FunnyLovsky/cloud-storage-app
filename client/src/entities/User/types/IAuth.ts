import { IUser } from "./IUser"

export interface IRegistration{
    message: string
}

export interface ILogin {
    token: string,
    user: IUser
}
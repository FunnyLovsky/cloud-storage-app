import axios from "axios";
import { ILogin, IRegistration } from "../../entities/User/types/IAuth";
import { API_URL } from "../../shared/api/urls";
import { errorHandler } from "../../shared/lib/utils/errorHandler";

export default class AuthService {
    static async registration(email: string, password: string, name: string) {
        try {
            const response = await axios.post<IRegistration>(`${API_URL}/registration`, {
                email,
                password,
                name
            });
            return response.data
        } catch (error: any) {
            errorHandler(error);
        }

    }

    static async login(email: string, password: string) {
        try {
            const response = await axios.post<ILogin>(`${API_URL}/login`, {
                email,
                password,
            });
            return response.data
        } catch (error: any) {
            errorHandler(error);
        }
    }

    static async auth() {
        try {
            const response = await axios.get<ILogin>(`${API_URL}/auth`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data
        } catch (error: any) {
            errorHandler(error);
        }
    }
}
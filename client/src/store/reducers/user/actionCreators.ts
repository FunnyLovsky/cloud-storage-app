import axios from "axios";
import { userRegistrationSuccess, userLoginSuccess, userFetchig, userFetchingError, userLogout, authFetchig, authFetchingError, authFetchingSuccess} from ".";
import { AppDispatch } from "../../store";
import { API_URL } from "../../../api/constans";
import { ILogin, IRegistration } from "../../../models/IAuth";

const registration = (email: string, password: string, name: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(userFetchig());
            const response = await axios.post<IRegistration>(`${API_URL}/registration`, {
                email,
                password,
                name
            });
            dispatch(userRegistrationSuccess());
            alert(response.data.message)
        } catch (e: any) {
            let error = '';

            if(e.response.data) {
                error = e.response.data.message
            } else {
                error = e.message
            }

            dispatch(userFetchingError(error))
        }
}

const login = (email: string, password: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(userFetchig());
            const response = await axios.post<ILogin>(`${API_URL}/login`, {
                email,
                password,
            });
            dispatch(userLoginSuccess(response.data.user));
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e: any) {
            let error = '';

            if(e.response.data) {
                error = e.response.data.message
            } else {
                error = e.message
            }

            dispatch(userFetchingError(error))
        }
}

const logout = () => 
    async (dispatch: AppDispatch) => {
        dispatch(userLogout());
        localStorage.removeItem('token');
}

const auth = () => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(authFetchig());
            const response = await axios.get<ILogin>(`${API_URL}/auth`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch(authFetchingSuccess(response.data.user));
            localStorage.setItem('token', response.data.token)
        } catch (e: any) {
            if(e.response.data) {
                dispatch(authFetchingError(e.response.data.message))
            } else {
                dispatch(authFetchingError(e.message))
            }
            localStorage.removeItem('token')
        }
}


export const userActionCreators = {
    registration,
    login,
    logout,
    auth,
}
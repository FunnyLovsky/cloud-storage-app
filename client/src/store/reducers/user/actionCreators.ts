import { actions } from ".";
import { AppDispatch } from "../../store";
import AuthService from "../../../api/service/auth";


const registration = (email: string, password: string, name: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(actions.userFetchig());
            const data = await AuthService.registration(email, password, name);
            dispatch(actions.userRegistrationSuccess());
            console.log(data!.message)
            dispatch(login(email, password));
        } catch (e: any) {
            dispatch(actions.userFetchingError(e.message))
        }
}

const login = (email: string, password: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(actions.userFetchig());
            const data = await AuthService.login(email, password);
            dispatch(actions.userLoginSuccess(data!.user));
            localStorage.setItem('token', data!.token)
            console.log(data)
        } catch (e: any) {
            dispatch(actions.userFetchingError(e.message))
        }
}

const logout = () => 
    async (dispatch: AppDispatch) => {
        dispatch(actions.userLogout());
        localStorage.removeItem('token');
}

const auth = () => 
    async (dispatch: AppDispatch) => {

        setTimeout(async () => {
            try {
                dispatch(actions.authFetchig());
                const data = await AuthService.auth();
                dispatch(actions.authFetchingSuccess(data!.user));
                localStorage.setItem('token', data!.token)
            } catch (e: any) {
                dispatch(actions.authFetchingError(e.message))
                localStorage.removeItem('token')
            }
        }, 1000);
}


export const userActionCreators = {
    registration,
    login,
    logout,
    auth,
}
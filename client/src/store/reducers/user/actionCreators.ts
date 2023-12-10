import axios from "axios";
import { userRegistration, userRegistrationError, userRegistrationSuccess} from ".";
import { AppDispatch } from "../../store";
import { API_URL } from "../../../api/constans";
import { IMessage } from "../../../models/IMessage";

export const registration = (email: string, password: string, name: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(userRegistration());
            const response = await axios.post<IMessage>(`${API_URL}/registration`, {
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

            dispatch(userRegistrationError(error))
        }
}

export const userActionCreators = {
    registration,
}
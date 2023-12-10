import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../../models/IUser"

interface UserState {
    currentUser: IUser,
    isAuth: boolean,
    isLoading: boolean,
    error: string | null
}

const initialState: UserState = {
    currentUser: {} as IUser,
    isAuth: false,
    error: null,
    isLoading: false
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegistration(state) {
            state.isLoading = true;
            state.error = null;
        },

        userRegistrationSuccess(state) {
            state.isLoading = false;
        },
        userRegistrationError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null
        }
    }
})

export const {userRegistration, userRegistrationError, userRegistrationSuccess, clearError} = userReducer.actions

export default userReducer.reducer
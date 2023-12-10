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
        },

        userRegistrationSuccess(state) {
            state.isLoading = false;
        },
        userRegistrationError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {userRegistration, userRegistrationError, userRegistrationSuccess} = userReducer.actions

export default userReducer.reducer
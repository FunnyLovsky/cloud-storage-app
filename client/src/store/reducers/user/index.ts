import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../../models/IUser"

interface UserState {
    currentUser: IUser,
    isAuth: boolean,
    isLoading: boolean,
    isAuthLoading: boolean
    error: string | null
}

const initialState: UserState = {
    currentUser: {} as IUser,
    isAuth: false,
    error: null,
    isLoading: false,
    isAuthLoading: false
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetchig(state) {
            state.isLoading = true;
            state.error = null;
        },

        userLoginSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.currentUser = action.payload;
            state.isAuth = true;
        },

        userRegistrationSuccess(state) {
            state.isLoading = false;
        },

        userFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        clearError(state) {
            state.error = null
        },

        userLogout(state) {
            state.currentUser = {} as IUser;
            state.isAuth = false;
        },

        authFetchig(state) {
            state.isAuthLoading = true;
            state.error = null;
        },

        authFetchingError(state, action: PayloadAction<string>) {
            state.isAuthLoading = false;
            state.error = action.payload;
        },

        authFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isAuthLoading = false;
            state.currentUser = action.payload;
            state.isAuth = true;
        },
    }
})

export const { 
    userFetchig, 
    userFetchingError, 
    userRegistrationSuccess, 
    clearError, 
    userLoginSuccess,
    userLogout,
    authFetchig,
    authFetchingError,
    authFetchingSuccess
} = userReducer.actions

export default userReducer.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../../models/IUser"

interface UserState {
    currentUser: IUser,
    isAuth: boolean,
    isLoading: boolean,
    isAuthLoading: boolean
    userError: string | null,
    authError: string | null,
}

const initialState: UserState = {
    currentUser: {} as IUser,
    isAuth: false,
    userError: null,
    isLoading: false,
    authError: null,
    isAuthLoading: true
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetchig(state) {
            state.isLoading = true;
            state.userError = null;
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
            state.userError = action.payload;
        },

        clearError(state) {
            state.userError = null
        },

        userLogout(state) {
            state.currentUser = {} as IUser;
            state.isAuth = false;
        },

        authFetchig(state) {
            state.isAuthLoading = true;
            state.authError = null;
        },

        authFetchingError(state, action: PayloadAction<string>) {
            state.isAuthLoading = false;
            state.authError = action.payload;
        },

        authFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isAuthLoading = false;
            state.currentUser = action.payload;
            state.isAuth = true;
        },

        authLoading(state) {
            state.isAuthLoading = false;
        }
    }
})


export const actions = userReducer.actions

export default userReducer.reducer
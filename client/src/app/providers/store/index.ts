import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fileReducer from '../../../store/reducers/file'
import useReducer from "../../../store/reducers/user";

const rootReducer = combineReducers({
    fileReducer,
    useReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
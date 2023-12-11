/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import './style/index.scss';
import AppRouter from "./router/AppRouter";
import { useActions, useAppSelector } from "./store/hooks";
import { useEffect } from "react";

const App = () => {
    const {auth} = useActions();
    const {isAuthLoading} = useAppSelector(state => state.useReducer)

    useEffect(() => {
        if(localStorage.getItem('token')) {
            auth();
        }
    }, [])
    
    if(isAuthLoading) {
        return(
            <h1>Authorization...</h1>
        )
    }

    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
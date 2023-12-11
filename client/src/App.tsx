/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import './style/index.scss';
import AppRouter from "./router/AppRouter";
import { useActions, useAppSelector } from "./store/hooks";
import { useEffect } from "react";
import AuthLoader from "./components/ui/AuthLoader/AuthLoader";
import { useDispatch } from "react-redux";
import { actions } from "./store/reducers/user";

const App = () => {
    const {auth} = useActions();
    const {isAuthLoading} = useAppSelector(state => state.useReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            auth();
        } else {
            dispatch(actions.authLoading())
        }
    }, [])
    
    if(isAuthLoading) {
        return(
            <AuthLoader/>
        )
    } 
        
    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
    
}

export default App;
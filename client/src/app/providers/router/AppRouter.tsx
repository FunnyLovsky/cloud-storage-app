
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar"
import { RouterName, privateRoutes, publicRoutes } from "./router";
import { useAppSelector } from "../../../shared/lib/hooks/useAppSelector";




const AppRouter = () => {
    const { isAuth } = useAppSelector(state => state.useReducer);
    return(
        <div className="app">
            <NavBar/>
            {isAuth
                ? 
                <Routes>
                    {privateRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={route.element}/>
                    )}
                    <Route path="*" element={<Navigate to={RouterName.DISK} replace/>}/>
                </Routes>
                :             
                <Routes>
                    {publicRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={route.element}/>
                    )}
                    <Route path="*" element={<Navigate to={RouterName.LOGIN} replace/>}/>
                </Routes>
            }

        </div>
    )
}

export default AppRouter;
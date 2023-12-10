import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import { publicRoutes } from "./router";

const AppRouter = () => {
    return(
        <div className="app">
            <NavBar/>
            <Routes>
                {publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element}/>
                )}
            </Routes>
        </div>
    )
}

export default AppRouter;
import Login from "../pages/Login"
import Registration from "../pages/Registration"

interface IRoute {
    path: string,
    element: JSX.Element
}

export enum RouterName {
    REGISTRATION = '/registration',
    LOGIN = '/login'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouterName.REGISTRATION,
        element: <Registration/>
    },
    {
        path: RouterName.LOGIN,
        element: <Login/>
    }
]
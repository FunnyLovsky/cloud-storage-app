import Login from "../pages/Login"
import Main from "../pages/Main"
import Registration from "../pages/Registration"

interface IRoute {
    path: string,
    element: JSX.Element
}

export enum RouterName {
    REGISTRATION = '/registration',
    LOGIN = '/login',
    MAIN = '/'
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

export const privateRoutes: IRoute[] = [
    {
        path: RouterName.MAIN,
        element: <Main/>
    }
]
import { BrowserRouter } from "react-router-dom";
import './style/index.scss';
import AppRouter from "./router/AppRouter";

const App = () => {
    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
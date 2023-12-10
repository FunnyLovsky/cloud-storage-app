import { FC } from "react";
import style from './button.module.scss';

interface IButton {
    children: React.ReactNode,
    onClick?: () => void,
}

const Button: FC<IButton> = ({children, onClick}) => {
    return(
        <button 
            className={style.btn} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
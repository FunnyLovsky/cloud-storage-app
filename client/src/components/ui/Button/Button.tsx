import { FC } from "react";
import style from './button.module.scss';

interface IButton {
    variant: 'primary' | 'secondary'
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent) => void,
}

const Button: FC<IButton> = ({children, onClick, variant}) => {
    const styles = variant === 'primary' ? style.btn_pri : style.btn_sec

    return(
        <button 
            className={styles} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
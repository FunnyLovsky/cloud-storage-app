import {FC} from "react";
import style from './form.module.scss';

interface IFrom {
    children: React.ReactNode,
    onClick?: boolean
}

const Form: FC<IFrom> = ({children, onClick}) => {
    return(
        <div className={style.reg} onClick={onClick ? (e) => e.stopPropagation() : undefined}>
            <div className={style.form}>
                {children}
            </div>
        </div>
    )
}

export default Form;
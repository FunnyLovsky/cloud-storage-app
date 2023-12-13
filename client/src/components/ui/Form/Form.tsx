import {FC} from "react";
import style from './form.module.scss';

interface IFrom {
    children: React.ReactNode,
    onClick?: boolean
}

const Form: FC<IFrom> = ({children, onClick}) => {
    return(
        <div className={style.reg} >
            <div className={style.form} onClick={onClick ? (e) => e.stopPropagation() : undefined}>
                {children}
            </div>
        </div>
    )
}

export default Form;
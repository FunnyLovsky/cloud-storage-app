import { FC } from "react";
import style from './form.module.scss';

interface IFrom {
    children: React.ReactNode 
}

const Form: FC<IFrom> = ({children}) => {
    return(
        <div className={style.reg}>
            <div className={style.form}>
                {children}
            </div>
        </div>
    )
}

export default Form;
import { FC } from "react"
import style from './errorItem.module.scss'

interface IErrorItem {
    error: string
}

const ErrorItem: FC<IErrorItem> = ({error}) => {
    return(
        <div className={style.error}>
            {error}
        </div>
    )
}

export default ErrorItem;
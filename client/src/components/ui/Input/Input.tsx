import { ChangeEvent, FC } from "react";
import style from './input.module.scss';

interface IInput {
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (value: string) => void,
}

const Input: FC<IInput> = ({type, placeholder, value, onChange}) => {
    return(
        <input
            value={value}
            onChange={
                onChange 
                ? (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value) 
                : undefined}
            type={type} 
            placeholder={placeholder}
            className={style.input} 
        />
    )
}

export default Input;
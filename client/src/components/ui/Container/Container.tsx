import { FC } from 'react';
import style from'./container.module.scss';

interface ContainerProps {
    children: React.ReactNode 
}

const Container: FC<ContainerProps> = ({children}) => {
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container;
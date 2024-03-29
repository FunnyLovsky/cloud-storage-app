import { Link } from 'react-router-dom';

import Button from '../../shared/ui/Button/Button';
import style from './authError.module.scss';
import { RouterName } from '../../app/providers/router/router';
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector';

const AuthError = () => {

    const {authError} = useAppSelector(state => state.useReducer);

    return(
        <div className={style.inner}>
            <div className={style.item}>
                <h2><span>&#9888;</span> {authError}</h2>
                <Button variant='primary'><Link to={RouterName.REGISTRATION}>Регистрация</Link></Button>
                <Button variant='primary'><Link to={RouterName.LOGIN}>Войти</Link></Button>
            </div>
        </div>
    )
}

export default AuthError;
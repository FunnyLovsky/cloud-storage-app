
import Container from '../ui/Container/Container';
import style from './navbar.module.scss'
import LOGO from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';
import { RouterName } from '../../router/router';
import { useActions, useAppSelector } from '../../store/hooks';



const NavBar = () => {
    const {isAuth, currentUser} = useAppSelector(state => state.useReducer);
    const {logout} = useActions()

    return(
        <div className={style.navbar}>
            <Container>
                <div className={style.header}>
                    <div className={style.item}>
                        <img src={LOGO} alt="" />
                        <h1>CLOUD STORAGE APP</h1>
                    </div>
                    {isAuth 
                        ?
                        <div className={style.item}>
                            <h1>{currentUser.name}</h1>
                            <h1 onClick={logout}>Выйти</h1>
                        </div>
                        :
                        <div className={style.item}>
                            <Link to={RouterName.LOGIN}>Войти</Link>
                            <Link to={RouterName.REGISTRATION}>Регистрация</Link>
                        </div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default NavBar;

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
                        <Link to={RouterName.MAIN}>CLOUD STORAGE APP</Link>
                    </div>
                    {isAuth 
                        ?
                        <div className={style.item}>
                            <Link to={RouterName.DISK}>{currentUser.name}</Link>
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
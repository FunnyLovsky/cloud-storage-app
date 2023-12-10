import Container from '../ui/Container/Container';
import style from './navbar.module.scss'
import LOGO from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';
import { RouterName } from '../../router/router';

const NavBar = () => {
    return(
        <div className={style.navbar}>
            <Container>
                <div className={style.header}>
                    <div className={style.item}>
                        <img src={LOGO} alt="" />
                        <h1>CLOUD STORAGE APP</h1>
                    </div>
                    <div className={style.item}>
                        <Link to={RouterName.LOGIN}>Войти</Link>
                        <Link to={RouterName.REGISTRATION}>Регистрация</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavBar;
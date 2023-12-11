import style from './authLoader.module.scss'

const AuthLoader = () => {
    return(
        <div className={style.inner}>
            <span className={style.loader}></span>
        </div>
    )
}

export default AuthLoader;
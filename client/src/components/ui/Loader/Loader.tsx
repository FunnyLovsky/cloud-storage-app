import style from './loader.module.scss'

const Loader = () => {
    return(
        <div className={style.inner}>
            <span className={style.loader}></span>
        </div>
    )
}

export default Loader;
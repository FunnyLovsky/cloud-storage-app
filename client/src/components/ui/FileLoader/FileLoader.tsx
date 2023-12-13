import style from './fileLoader.module.scss'

const FileLoader = () => {
    return(
        <div className={style.inner}>
            <span className={style.loader}></span>
        </div>
    )
}

export default FileLoader;
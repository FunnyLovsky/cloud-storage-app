import { useAppSelector } from '../../store/hooks';
import File from '../ui/File/File';
import FileLoader from '../ui/FileLoader/FileLoader';
import style from './fileList.module.scss';


const FileList = () => {
    const {files, isLoadingFiles} = useAppSelector(state => state.fileReducer)

    return(
        <div>
            <div className={style.inner}>
                <div className={style.item}>
                    <h3>Название</h3>
                </div>
                <div className={style.item}>
                    <h3>Дата</h3>
                    <h3>Размер</h3>
                </div>
            </div>

            {!isLoadingFiles 
                ? 
                files.map(file =>
                    <File key={file._id} file={file}/>    
                )
                :
                <FileLoader/>
            }
        </div>

    )
}

export default FileList
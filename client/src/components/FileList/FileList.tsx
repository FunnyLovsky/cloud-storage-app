
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector';
import File from '../ui/File/File';
import FileLoader from '../ui/FileLoader/FileLoader';
import style from './fileList.module.scss';


const FileList = () => {
    const {files, isLoadingFiles} = useAppSelector(state => state.fileReducer);
    const mapFiles = () => {
        if(files.length > 0) {
            return files.map(file => <File key={file._id} file={file}/>)
        } else {
            return <h1 style={{textAlign: 'center'}}>Упс! Похоже тут нет файлов :(</h1>
        }
    }

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

            {isLoadingFiles && (
                <FileLoader/>
            )}

            {!isLoadingFiles && (
                mapFiles()
            )}
        </div>

    )
}

export default FileList
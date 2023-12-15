import { FC } from 'react';
import { IFile } from '../../../models/IFile';
import style from './file.module.scss';
import FILE from '../../../assets/icons/file.svg';
import DIR from '../../../assets/icons/dir.svg';
import IMG from '../../../assets/icons/img.svg';
import AUDIO from '../../../assets/icons/music.svg';
import VIDEO from '../../../assets/icons/video.svg';
import Button from '../Button/Button';
import { useActions, useAppSelector } from '../../../store/hooks';

interface FileProps {
    file: IFile
}

const File: FC<FileProps> = ({file}) => {
    const {openDirHandler, downloadFile} = useActions()
    const {currentDir, path} = useAppSelector(state => state.fileReducer);

    const openDir = () => {
        if(file.type === 'dir') {
            openDirHandler(currentDir!, file, path)
        } 
    }

    const getIcon = () => {
        if(file.type)
        switch (file.type) {
            case 'dir':
                return DIR;
            case 'mp3':
            case 'wav':
                return AUDIO;   
            case 'jpg':
            case 'png':
            case 'jpeg':
                return IMG;
            case 'mp4':
                return VIDEO    
            default:
                return FILE
        }
    }

    const downloadFileHandler = () => {
        downloadFile(file)
    }

    return(
        <div className={style.file} onClick={openDir}>
            <div className={style.item}>
                <img src={getIcon()} alt="" />
                <div className="name">{file.name}</div>
            </div>
            <div className={style.item}>
                <div className="date">{file.date.slice(0, 10)}</div>
                <div className="size">{file.size} b</div>
                <div className={style.buttons}>
                    {file.type !== 'dir' && (
                        <Button variant='secondary' onClick={downloadFileHandler}>DownLoad</Button>
                    )}
                    <Button variant='secondary'>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default File
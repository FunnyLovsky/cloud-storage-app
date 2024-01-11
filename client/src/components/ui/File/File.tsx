import { FC } from 'react';
import { IFile } from '../../../entities/File/types/IFile';
import style from './file.module.scss';
import FILE from '../../../shared/assets/icons/file.svg';
import DIR from '../../../shared/assets/icons/dir.svg';
import IMG from '../../../shared/assets/icons/img.svg';
import AUDIO from '../../../shared/assets/icons/music.svg';
import VIDEO from '../../../shared/assets/icons/video.svg';
import Button from '../../../shared/ui/Button/Button';
import { getSize } from '../../../shared/lib/utils/getSize';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector';
import { useActions } from '../../../shared/lib/hooks/useActions';

interface FileProps {
    file: IFile
}

const File: FC<FileProps> = ({file}) => {
    const {openDirHandler, downloadFile, deleteFile} = useActions()
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

    const downloadFileHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        downloadFile(file)
    }

    const deleteHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        deleteFile(file)
    }

    return(
        <div className={style.file} onClick={openDir} style={{cursor: file.type === 'dir' ? 'pointer' : 'auto'}}>
            <div className={style.item}>
                <img src={getIcon()} alt="" />
                <div className="name">{file.name}</div>
            </div>
            <div className={style.item}>
                <div className="date">{file.date.slice(0, 10)}</div>
                <div className="size">{getSize(file.size)}</div>
                <div className={style.buttons}>
                    {file.type !== 'dir' && (
                        <Button variant='secondary' onClick={(e: React.MouseEvent) => downloadFileHandler(e)}>DownLoad</Button>
                    )}
                    <Button variant='secondary' onClick={(e: React.MouseEvent) => deleteHandler(e)}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default File
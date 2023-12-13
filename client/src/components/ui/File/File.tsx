import { FC } from 'react';
import { IFile } from '../../../models/IFile';
import style from './file.module.scss';
import FILE from '../../../assets/icons/file.svg';
import DIR from '../../../assets/icons/dir.svg';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { actionsFile } from '../../../store/reducers/file';
import { useAppSelector } from '../../../store/hooks';

interface FileProps {
    file: IFile
}

const File: FC<FileProps> = ({file}) => {
    const dispatch = useDispatch();
    const {currentDir} = useAppSelector(state => state.fileReducer)

    const openDirHandler = () => {
        dispatch(actionsFile.addToStack(currentDir!));
        dispatch(actionsFile.setCurrentDir(file._id))
    }

    return(
        <div className={style.file} onClick={file.type === 'dir' ? () => openDirHandler() : undefined}>
            <div className={style.item}>
                <img src={file.type === 'dir' ? DIR : FILE} alt="" />
                <div className="name">{file.name}</div>
            </div>
            <div className={style.item}>
                <div className="date">{file.date.slice(0, 10)}</div>
                <div className="size">{file.size} b</div>
                <div className={style.buttons}>
                    <Button variant='secondary'>DownLoad</Button>
                    <Button variant='secondary'>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default File
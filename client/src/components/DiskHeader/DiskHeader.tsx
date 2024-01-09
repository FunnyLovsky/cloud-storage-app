import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import Button from '../../shared/ui/Button/Button';
import style from './diskHeader.module.scss';
import { actionsFile } from '../../store/reducers/file';

import { ChangeEvent, useState } from 'react';
import FileList from '../FileList/FileList';
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector';
import { useActions } from '../../shared/lib/hooks/useActions';

const DiskHeader = () => {
    const dispatch = useDispatch();
    const {currentUser} = useAppSelector(state => state.useReducer);
    const {path, currentDir} = useAppSelector(state => state.fileReducer);
    const {backToDir, uploadFile} = useActions();
    const [dragInter, setDragEnter] = useState(false)

    const fileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target?.files;

        if (files) {
            const filesArray = Array.from(files);
            filesArray.forEach(file => {
                uploadFile(currentDir, file);
            });
        }
    }

    const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(true)
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files);

        files.forEach(file => {
            uploadFile(currentDir, file);
        });
        setDragEnter(false)
 
    }
    return(
        <>
            {!dragInter ? 
                <div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                    <Modal/>
                    <div className={style.header}>
                        <div className={style.item}>
                            {currentDir && (<Button variant='secondary' onClick={backToDir}>Назад</Button>)}
                            <Button variant='secondary' onClick={() => dispatch(actionsFile.setModal(true))}>Создать новую папку</Button>
                            <div className={style.upload}>
                                <label htmlFor="upload">Загрузить файл</label>
                                <input type="file" id='upload' onChange={(e) => fileUpload(e)} multiple={true}/>
                            </div>
                        </div>
                         <div className={style.item}>
                            <select name="" id="">
                                <option value="">Имя</option>
                                <option value="">Размер</option>
                            </select>
                        </div>
                    </div>
                    <h3>{currentUser.name}/{path}</h3>
                    <FileList/>
                </div>
                :
                <div 
                    className={style.drop_area} 
                    onDragEnter={dragEnterHandler} 
                    onDragLeave={dragLeaveHandler} 
                    onDragOver={dragEnterHandler}
                    onDrop={dropHandler}
                >
                    <h1>Перетащите файлы сюда</h1>
                </div>
            }
            
        </>

    )
}

export default DiskHeader;
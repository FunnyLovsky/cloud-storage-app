import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import Button from '../ui/Button/Button';
import style from './diskHeader.module.scss';
import { actionsFile } from '../../store/reducers/file';
import { useActions, useAppSelector } from '../../store/hooks';
import { ChangeEvent } from 'react';

const DiskHeader = () => {
    const dispatch = useDispatch();
    const {currentUser} = useAppSelector(state => state.useReducer);
    const {path, currentDir} = useAppSelector(state => state.fileReducer);
    const {backToDir, uploadFile} = useActions()

    const fileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target?.files;

        if (files) {
            const filesArray = Array.from(files);
            filesArray.forEach(file => {
                uploadFile(currentDir, file);
            });
        }
    }

    return(
        <>
            <Modal/>
            <div className={style.header}>
                <div className={style.item}>
                    <Button variant='secondary' onClick={backToDir}>Назад</Button>
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
        </>

    )
}

export default DiskHeader;
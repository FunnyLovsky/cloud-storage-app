import { FC, useState } from 'react';
import Button from '../../shared/ui/Button/Button';
import Form from '../ui/Form/Form';
import Input from '../../shared/ui/Input/Input';
import style from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { actionsFile } from '../../store/reducers/file';
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector';
import { useActions } from '../../shared/lib/hooks/useActions';



const Modal: FC = () => {
    const {modal, currentDir} = useAppSelector(state => state.fileReducer);
    const dispatch = useDispatch();
    const {createDir} = useActions();
    const [value, setValue] = useState<string>('')

    const createDirHandler = () => {
        createDir(currentDir, value);
        dispatch(actionsFile.setModal(false));
        setValue('')
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            createDirHandler()
        }
    }

    const closeModal = () => {
        dispatch(actionsFile.setModal(false));
        setValue('')
    }

    return(
        <div 
            className={style.bg} 
            style={{display: modal ? 'block' : 'none'}} 
            onClick={closeModal}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => keyDownHandler(e)}
        >
            <Form onClick={true}>
                <h3>Создать новую папку</h3>
                <Input type='text' placeholder='Введите имя новой папки...' value={value} onChange={setValue}/>
                <Button variant='primary' onClick={createDirHandler} >Создать</Button>
            </Form>
        </div>
    )
}

export default Modal;
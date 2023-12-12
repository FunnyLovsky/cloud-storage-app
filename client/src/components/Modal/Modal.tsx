import { FC } from 'react';
import Button from '../ui/Button/Button';
import Form from '../ui/Form/Form';
import Input from '../ui/Input/Input';
import style from './modal.module.scss';
import { useAppSelector } from '../../store/hooks';
import { useDispatch } from 'react-redux';
import { actionsFile } from '../../store/reducers/file';



const Modal: FC = () => {
    const {modal} = useAppSelector(state => state.fileReducer);
    const dispatch = useDispatch()

    return(
        <div className={style.bg} style={{display: modal ? 'block' : 'none'}} onClick={() => dispatch(actionsFile.setModal(false))}>
            <Form onClick={true}>
                <h3>Создать новую папку</h3>
                <Input type='text' placeholder='Введите имя новой папки...'/>
                <Button variant='primary'>Создать</Button>
            </Form>
        </div>
    )
}

export default Modal;
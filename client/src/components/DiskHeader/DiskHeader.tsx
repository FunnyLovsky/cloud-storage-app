import Button from '../ui/Button/Button';
import style from './diskHeader.module.scss';

const DiskHeader = () => {
    return(
        <div className={style.header}>
            <div className={style.item}>
                <Button variant='secondary'>Назад</Button>
                <Button variant='secondary'>Создать новую папку</Button>
            </div>
            <div className={style.item}>
                <select name="" id="">
                    <option value="">Имя</option>
                    <option value="">Размер</option>
                </select>
            </div>
        </div>
    )
}

export default DiskHeader;
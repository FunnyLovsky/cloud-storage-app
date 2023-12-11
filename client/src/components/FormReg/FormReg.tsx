import { useState } from "react";
import Button from "../ui/Button/Button";
import Container from "../ui/Container/Container";
import Form from "../ui/Form/Form";
import Input from "../ui/Input/Input";
import { useActions, useAppSelector } from "../../store/hooks";
import { actions } from "../../store/reducers/user";
import { useDispatch } from "react-redux";
import Loader from "../ui/Loader/Loader";
import ErrorItem from "../ui/ErrorItem/ErrorItem";


const FormReg = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {registration} = useActions();
    const dispatch = useDispatch()
    const {isLoading, userError} = useAppSelector(state => state.useReducer)

    if(isLoading) {
        return(
            <Loader/>
        )
    }

    const clearingEror = () => {
        dispatch(actions.clearError())
    }

    return(
        <Container>
            <Form>
                <h3>Регистрация</h3>
                <Input 
                    value={name} 
                    onChange={setName} 
                    type="text" 
                    placeholder="Введите имя..."
                    onCLick={clearingEror}
                />
                <Input
                    value={email} 
                    onChange={setEmail} 
                    type="email" 
                    placeholder="Введите email..."
                    onCLick={clearingEror}
                />
                <Input
                    value={password}
                    onChange={setPassword} 
                    type="password" 
                    placeholder="Введите пароль..."
                    onCLick={clearingEror}
                />
                <Button onClick={() => registration(email, password, name)}>Войти</Button>
                {userError && <ErrorItem error={userError}/>}
            </Form>
        </Container>
    )
}

export default FormReg;
import { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import Container from "../../shared/ui/Container/Container";
import Form from "../ui/Form/Form";
import Input from "../../shared/ui/Input/Input";

import { actions } from "../../store/reducers/user";
import { useDispatch } from "react-redux";
import Loader from "../ui/Loader/Loader";
import ErrorItem from "../ui/ErrorItem/ErrorItem";
import { useActions } from "../../shared/lib/hooks/useActions";
import { useAppSelector } from "../../shared/lib/hooks/useAppSelector";


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
                <Button variant="primary" onClick={() => registration(email, password, name)}>Войти</Button>
                {userError && <ErrorItem error={userError}/>}
            </Form>
        </Container>
    )
}

export default FormReg;
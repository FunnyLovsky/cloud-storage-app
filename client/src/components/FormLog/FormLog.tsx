import { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import Container from "../../shared/ui/Container/Container";
import Form from "../ui/Form/Form";
import Input from "../../shared/ui/Input/Input";

import Loader from "../ui/Loader/Loader";
import ErrorItem from "../ui/ErrorItem/ErrorItem";
import { useDispatch } from "react-redux";
import { actions } from "../../store/reducers/user";
import { useAppSelector } from "../../shared/lib/hooks/useAppSelector";
import { useActions } from "../../shared/lib/hooks/useActions";

const FormLog = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {userError, isLoading} = useAppSelector(state => state.useReducer)
    const dispatch = useDispatch()
    const {login} = useActions()

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
                <h3>Авторизация</h3>
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
                <Button variant="primary" onClick={() => login(email, password)}>Войти</Button>

                {userError && <ErrorItem error={userError}/>}
            </Form>
        </Container>
    )
}

export default FormLog;
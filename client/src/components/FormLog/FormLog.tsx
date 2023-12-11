import { useState } from "react";
import Button from "../ui/Button/Button";
import Container from "../ui/Container/Container";
import Form from "../ui/Form/Form";
import Input from "../ui/Input/Input";
import { useActions, useAppSelector } from "../../store/hooks";

const FormLog = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {error} = useAppSelector(state => state.useReducer)
    const {login} = useActions()
    
    return(
        <Container>
            <Form>
                <h3>Авторизация</h3>
                <Input 
                    value={email} 
                    onChange={setEmail} 
                    type="email" 
                    placeholder="Введите email..."
                />
                <Input
                    value={password} 
                    onChange={setPassword}  
                    type="password" 
                    placeholder="Введите пароль..."
                />
                <Button onClick={() => login(email, password)}>Войти</Button>
                {error && <div style={{color: 'red', fontWeight: 'bold'}}>*{error}</div>}
            </Form>
        </Container>
    )
}

export default FormLog;
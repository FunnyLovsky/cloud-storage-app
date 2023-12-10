import { useState } from "react";
import Button from "../ui/Button/Button";
import Container from "../ui/Container/Container";
import Form from "../ui/Form/Form";
import Input from "../ui/Input/Input";


const FormReg = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <Container>
            <Form>
                <h3>Регистрация</h3>
                <Input 
                    value={name} 
                    onChange={setName} 
                    type="text" 
                    placeholder="Введите имя..."
                />
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
                <Button>Войти</Button>
            </Form>
        </Container>
    )
}

export default FormReg;
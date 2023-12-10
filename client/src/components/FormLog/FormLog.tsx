import Button from "../ui/Button/Button";
import Container from "../ui/Container/Container";
import Form from "../ui/Form/Form";
import Input from "../ui/Input/Input";

const FormLog = () => {
    return(
        <Container>
            <Form>
                <h3>Авторизация</h3>
                <Input type="email" placeholder="Введите email..."/>
                <Input type="password" placeholder="Введите пароль..."/>
                <Button>Войти</Button>
            </Form>
        </Container>
    )
}

export default FormLog;
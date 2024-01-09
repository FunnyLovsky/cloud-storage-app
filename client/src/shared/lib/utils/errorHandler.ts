export const errorHandler = (error: any) => {
    if (error.response) {
        throw new Error(error.response.data.message);
    } else if (error.request) {
        throw new Error('Не удалось получить ответ от сервера.');
    } else {
        throw new Error('Произошла неизвестная ошибка');
    }
}
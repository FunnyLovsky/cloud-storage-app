# Cloud Storage App

**Cloud Storage App** - это веб-приложение для облачного хранилища, созданное на стеке MERN (MongoDB, Express.js, React, Node.js). Позволяет пользователям безопасно хранить, управлять и получать доступ к своим файлам из любой точки мира с подключением к интернету.

## Особенности

- **Аутентификация пользователя:** Безопасная аутентификация пользователя с использованием JWT (JSON Web Tokens) для контроля доступа.
- **Загрузка и скачивание файлов:** Легко загружайте и скачивайте файлы в облачное хранилище.
- **Управление файлами:** Организуйте и управляйте файлами с возможностью создания папок, удаления файлов и перемещения файлов между папками.
- **Адаптивный дизайн:** Отзывчивый и удобный интерфейс, который адаптируется под разные размеры экранов.

## Установка

1. Клонировать репозиторий:

```bash
git clone https://github.com/FunnyLovsky/cloud-storage-app
```

2. Перейти в директорию проекта:

```bash
cd cloud-storage-app
```

3. Установить зависимости для клиента:

```bash
cd client
npm install
```

4. Запустить приложение клиента:

```bash
npm start
```

Приложение должно быть запущено по адресу [http://localhost:3000](http://localhost:3000).

5. Установить зависимости для сервера:

```bash
cd ../server
npm install
```

6. Настроить переменные окружения для сервера:

Создайте .env файл и настройте следующие переменные:

```makefile
PORT=5000
MONGODB_URI=ваша_строка_подключения_к_mongodb
JWT_ACCESS_KEY=ваш_секретный_ключ_jwt
JWT_REFRESH_KEY=ваш_секретный_ключ_jwt
```

7. Запустить приложение сервера:

```bash
npm dev
```

Приложение должно быть запущено по адресу [http://localhost:5000](http://localhost:5000).

## Используемые технологии

### Frontend

- **TypeScript:** Статически типизированный JavaScript для улучшения разработки.
- **React:** Библиотека для создания пользовательских интерфейсов.
- **Redux:** Библиотека для управления состоянием приложения.
- **React-router-dom:** Навигация внутри React-приложений.
- **Axios:** Библиотека для выполнения HTTP-запросов.

### Backend

- **TypeScript:** Статически типизированный JavaScript для улучшения разработки.
- **Node.js:** Рантайм JavaScript для выполнения серверного кода.
- **Express.js:** Веб-фреймворк для создания серверной части приложения.
- **Express-fileupload:** Middleware для обработки загрузки файлов.
- **Express-validator:** Библиотека для валидации данных в Express-приложении.
- **MongoDB:** База данных NoSQL для хранения данных пользователей и информации о файлах.
- **Mongoose:** Библиотека для работы с MongoDB в среде Node.js.
- **JWT (JSON Web Tokens):** Используется для безопасной аутентификации пользователей.
- **Bcrypt.js:** Библиотека для хеширования паролей.
- **UUID:** Генерация уникальных идентификаторов.

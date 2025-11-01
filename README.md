# Social Network

Полнофункциональное веб-приложение социальной сети с поддержкой real-time коммуникации.

## 📚 Документация

Подробная документация проекта доступна в файле [DOCUMENTATION.md](./DOCUMENTATION.md).

## 🚀 Быстрый старт

### Установка

```bash
npm install  # устанавливаем зависимости для клиента и сервера
```

### Запуск

```bash
npm start      # запуск frontend проекта в dev режиме (порт 3000)
npm run serve  # запуск backend проекта в dev режиме (порт 8082)
```

## 📝 Скрипты

### Frontend

- `npm start` - запуск frontend проекта в dev режиме (Webpack)
- `npm run start:vite` - запуск frontend проекта в dev режиме на Vite
- `npm run build:prod` - сборка в production режиме
- `npm run build:dev` - сборка в dev режиме (не минимизирован)
- `npm run test:unit` - запуск unit тестов
- `npm run test:e2e` - запуск E2E тестов (Cypress)
- `npm run format` - форматирование всего проекта с помощью Prettier
- `npm run lint` - проверка кода с помощью ESLint

### Backend

- `npm run serve` - запуск backend проекта в dev режиме (nodemon)
- `npm start` - запуск backend проекта в production режиме

## 🏗️ Архитектура проекта

Проект написан в соответствии с методологией **Feature Sliced Design**.

Ссылка на документацию - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

### Структура слоев:

- **app** - инициализация приложения, провайдеры, роутинг
- **pages** - полноценные страницы приложения
- **widgets** - крупные составные блоки UI
- **features** - бизнес-логика и функциональность
- **entities** - бизнес-сущности
- **shared** - переиспользуемые модули

----


## Сущности (entities)

- [Avatar](client/src/entities/Avatar)
- [Comment](client/src/entities/Comment)
- [ConversationLink](client/src/entities/ConversationLink)
- [Dialog](client/src/entities/Dialog)
- [Friends](client/src/entities/Friends)
- [Message](client/src/entities/Message)
- [News](client/src/entities/News)
- [Post](client/src/entities/Post)
- [SettingBtn](client/src/entities/SettingBtn)
- [UserData](client/src/entities/UserData)
- [WhoLikesIt](client/src/entities/WhoLikesIt)


----


## Фичи (features)
- [AuthByEmail](client/src/features/AuthByEmail)
- [FindUsers](client/src/features/FindUsers)
- [GetAnotherUserData](client/src/features/GetAnotherUserData)
- [GetFriendsData](client/src/features/GetFriendsData)
- [Messenger](client/src/features/Messenger)
- [Notifications](client/src/features/Notifications)
- [CreatePost](client/src/features/CreatePost)
- [UploadAvatar](client/src/features/UploadAvatar)

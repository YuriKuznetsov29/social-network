## Запуск проекта

```
npm install - устанавливаем зависимости для клиента и сервера
npm start - запуск frontend проекта в dev режиме
npm run serve - запуск backend проекта в dev режиме
```
## Скрипты

- `npm start` - запуск frontend проекта в dev режиме
- `npm run start:vite` - запуск frontend проекта в dev режиме на vite
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run test:unit` - Запуск unit тестов
- `npm run format` - Запуск форматирования всего проекта с помощью Prettier
  
----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

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
<!-- - [CreatePost](client/src/features/CreatePost) -->
- [UploadAvatar](client/src/features/UploadAvatar)


----


## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)
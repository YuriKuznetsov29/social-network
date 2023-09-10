// import { SERVER_URI, USER_KEY } from 'constants'
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
// import storage from 'utils/storage'
import { SERVER_URL } from '../../../http/index'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'

export interface Message {
    messageId: string
    messageType: string
    textOrPathToFile: string
    roomId: string
    userId: string
    userName: string
}

export default function useChat(roomId: string) {
    // извлекаем данные пользователя из локального хранилища
    // const user = storage.get(USER_KEY)
    const { userData } = useAppSelector(getAuthState)

    // локальное состояние для списка пользователей
    const [users, setUsers] = useState([])
    // локальное состояние для списка сообщений
    const [messages, setMessages] = useState<Message[]>([])
    // состояние для системного сообщения
    const [log, setLog] = useState(null)
    // иммутабельное состояние для сокета
    const { current: socket } = useRef(
        io(SERVER_URL, {
            query: {
                // отправляем идентификатор комнаты и имя пользователя на сервер
                roomId: roomId, //user.roomId,
                userName: userData.firstName,
            },
        })
    )

    // регистрируем обработчики
    useEffect(() => {
        // сообщаем о подключении нового пользователя
        socket.emit('user:add', userData)

        // запрашиваем сообщения из БД
        socket.emit('message:get')

        // обрабатываем получение системного сообщения
        socket.on('log', (log) => {
            setLog(log)
        })

        // обрабатываем получение обновленного списка пользователей
        socket.on('user_list:update', (users) => {
            setUsers(users)
        })

        // обрабатываем получение обновленного списка сообщений
        socket.on('message_list:update', (messages) => {
            setMessages(messages)
        })
    }, [])

    // метод для отправки сообщения
    const sendMessage = (message: Message) => {
        socket.emit('message:add', message)
    }

    // метод для удаления сообщения
    const removeMessage = (message: Message) => {
        socket.emit('message:remove', message)
    }

    return { users, messages, log, sendMessage, removeMessage }
}

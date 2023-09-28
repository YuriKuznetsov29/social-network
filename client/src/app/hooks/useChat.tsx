// import { SERVER_URI, USER_KEY } from 'constants'
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
// import storage from 'utils/storage'
import { SERVER_URL } from '../../shared/api/http/index'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { socket } from 'app/socket'
import { IUser } from 'entities/UserData/model/types/IUser'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'

export interface MessageData {
    messageId: string
    // messageType: string
    textOrPathToFile: string
    roomId: string
    author: string
    // userName: string
    createdAt?: string
    // avatarPath: string
}

export default function useChat(roomId: string) {
    // извлекаем данные пользователя из локального хранилища
    // const user = storage.get(USER_KEY)
    const { isAuth } = useAppSelector(getAuthState)
    const userData = useAppSelector(getUserData)

    // if (!isAuth) return

    const [users, setUsers] = useState<IUser[]>([])
    const [messages, setMessages] = useState<MessageData[]>([])
    const [log, setLog] = useState<string>('')
    const [lastMessage, setLastMessage] = useState<MessageData>({} as MessageData)

    // иммутабельное состояние для сокета
    const { current: socket } = useRef(
        io(SERVER_URL, {
            autoConnect: false,
        })
    )

    useEffect(() => {
        socket.io.opts.query = {
            roomId: roomId,
            userName: userData.firstName,
        }

        socket.connect()

        // сообщаем о подключении нового пользователя
        socket.emit('user:add', userData)

        // запрашиваем сообщения из БД
        socket.emit('message:get')

        const onLog = (log: string) => {
            setLog(log)
        }
        socket.on('log', onLog)

        const onUsersUpdate = (users: IUser[]) => {
            setUsers(users)
        }
        socket.on('user_list:update', onUsersUpdate)

        const onMessageUpdate = (messages: MessageData[]) => {
            setMessages(messages)
        }
        socket.on('message_list:update', onMessageUpdate)

        const onLastMessage = (message: MessageData) => {
            setLastMessage(message)
        }
        socket.on('message_last:update', onLastMessage)

        return () => {
            socket.off('message_list:update', onMessageUpdate)
            socket.off('user_list:update', onUsersUpdate)
            socket.off('message_last:update', onLastMessage)
            socket.off('log', onLog)
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        if (roomId === '1' && isAuth) {
            socket.emit('user:connect', roomId, userData)
        }

        if (roomId === '1' && !isAuth) {
            socket.emit('user:disconnect', roomId, userData)
        }
    }, [isAuth])

    // метод для отправки сообщения
    const sendMessage = (message: MessageData) => {
        socket.emit('message:add', message)
    }

    // метод для удаления сообщения
    const removeMessage = (message: MessageData) => {
        socket.emit('message:remove', message)
    }

    return { users, messages, log, lastMessage, sendMessage, removeMessage }
}

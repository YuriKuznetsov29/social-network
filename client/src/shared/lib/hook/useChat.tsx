import { getUserData, getUserInitied } from '@/entities/UserData'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { getAuthStatus } from '@/features/AuthByEmail'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

import { SERVER_URL } from '../../api/http/index'

export interface MessageData {
    messageId: string
    textOrPathToFile: string
    roomId: string
    author: string
    createdAt?: string
}

export interface MessageDataWithLimit {
    data: MessageData[]
    hasMore: boolean
}

export default function useChat(roomId: string) {
    const isAuth = useAppSelector(getAuthStatus)
    const userData = useAppSelector(getUserData)
    const userInit = useAppSelector(getUserInitied)

    const [users, setUsers] = useState<IUser[]>([])
    const [messages, setMessages] = useState<MessageData[]>([])
    const [hasMore, setHasMore] = useState(false)
    const [log, setLog] = useState<string>('')
    const [lastMessage, setLastMessage] = useState<MessageData>({} as MessageData)

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

        socket.emit('user:add', userData)

        socket.emit('message:get')

        const onLog = (log: string) => {
            setLog(log)
        }
        socket.on('log', onLog)

        const onUsersUpdate = (users: IUser[]) => {
            setUsers(users)
        }

        socket.on('user_list:update', onUsersUpdate)

        const onMessageUpdate = (messages: MessageData[], hasMore: boolean) => {
            setMessages(messages)
            setHasMore(hasMore)
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
        // }
    }, [])

    useEffect(() => {
        if (roomId === '1' && isAuth) {
            socket.emit('user:connect', roomId, userData)
        }

        if (roomId === '1' && !isAuth) {
            socket.emit('user:disconnect', roomId, userData)
        }
    }, [isAuth])

    const loadMore = () => {
        socket.emit('message:loadMore')
    }

    const sendMessage = (message: MessageData) => {
        socket.emit('message:add', message)
    }

    const removeMessage = (messageId: string) => {
        socket.emit('message:remove', messageId)
    }

    return { users, messages, log, lastMessage, sendMessage, loadMore, hasMore, removeMessage }
}

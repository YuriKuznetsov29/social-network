import classNames from 'classnames'
import cls from './ConversationLink.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import User from 'shared/assets/icons/user.svg'
import useChat, { MessageData } from 'widgets/Dialog/model/useChat'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getLastMessage, getMessengerState } from 'features/Messenger'
import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { Avatar } from 'widgets/Avatar'

interface ConversationLinkProps {
    className?: string
    roomId: string
    companionId: string
}

export const ConversationLink = ({ className, roomId, companionId }: ConversationLinkProps) => {
    // const [lastMessage, setLastMessage] = useState<MessageData | null>(null)
    const [lastMessageTime, setLastMessageTime] = useState('')
    const [user, setUser] = useState<IUser | null>(null)

    const dispatch = useAppDispatch()
    const { users, lastMessage } = useAppSelector(getMessengerState)

    // const { messages } = useChat(roomId)

    useEffect(() => {
        // setLastMessage(messages[messages.length - 1])

        const getTimeLastMessage = () => {
            const date = new Date(lastMessage?.createdAt)
            return date.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
            })
        }

        setLastMessageTime(getTimeLastMessage())

        dispatch(getLastMessage({ roomId }))
    }, [])

    useEffect(() => {
        const user = users.find((user) => user.userId === companionId)
        setUser(user)
    }, [users])

    return (
        <div className={classNames(cls.ConversationLink, {}, [className])}>
            <AppLink to={`/messenger/${roomId}`}>
                <div className={cls.dialog}>
                    {user?.avatarPath ? (
                        <img
                            className={cls.avatar}
                            src={'http://localhost:8080/' + user?.avatarPath}
                            alt="avatar"
                        />
                    ) : (
                        <User className={cls.avatar} />
                    )}
                    <div className={cls.dialogData}>
                        <div>
                            <div>
                                {user?.firstName} {user?.lastName}
                            </div>
                            <div className={cls.messageContainer}>
                                <Avatar avatarPath={lastMessage?.avatarPath} />
                                <div>{lastMessage?.textOrPathToFile}</div>
                            </div>
                        </div>
                        <div>{lastMessageTime}</div>
                    </div>
                </div>
            </AppLink>
        </div>
    )
}

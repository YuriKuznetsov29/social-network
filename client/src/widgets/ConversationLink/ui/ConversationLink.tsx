import classNames from 'classnames'
import cls from './ConversationLink.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import User from 'shared/assets/icons/user.svg'
import useChat, { MessageData } from 'widgets/Dialog/model/useChat'
import { useEffect, useState } from 'react'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getMessengerState } from 'features/Messenger'
import { IUser } from 'features/AuthByEmail/model/types/IUser'

interface ConversationLinkProps {
    className?: string
    roomId: string
    companionId: string
}

export const ConversationLink = ({ className, roomId, companionId }: ConversationLinkProps) => {
    const [lastMessage, setLastMessage] = useState<MessageData | null>(null)
    const [lastMessageTime, setLastMessageTime] = useState('')
    const [user, setUser] = useState<IUser | null>(null)

    const { users } = useAppSelector(getMessengerState)
    console.log(users)

    const { messages } = useChat(roomId)

    useEffect(() => {
        setLastMessage(messages[messages.length - 1])

        const getTimeLastMessage = () => {
            const date = new Date(lastMessage?.createdAt)
            return date.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
            })
        }

        setLastMessageTime(getTimeLastMessage())
    }, [messages])

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
                            <div>{lastMessage?.textOrPathToFile}</div>
                        </div>
                        <div>{lastMessageTime}</div>
                    </div>
                </div>
            </AppLink>
        </div>
    )
}

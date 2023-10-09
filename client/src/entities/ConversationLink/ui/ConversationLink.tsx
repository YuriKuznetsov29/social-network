import { AppLink } from 'shared/ui/AppLink/AppLink'
import useChat, { MessageData } from 'shared/lib/hook/useChat'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import dayjs from 'dayjs'
import { getUserDataById } from 'shared/api/getUserDataById'
import { Avatar } from 'entities/Avatar'
import cls from './ConversationLink.module.scss'

interface ConversationLinkProps {
    className?: string
    roomId: string
    companionId: string
}

export const ConversationLink = (props: ConversationLinkProps) => {
    const { className, companionId, roomId } = props

    const [lastMessage, setLastMessage] = useState<MessageData | null>(null)
    const [companion, setCompanion] = useState<IUser | null>(null)
    const [author, setAuthor] = useState<IUser | null>(null)

    const { messages } = useChat(roomId)

    useEffect(() => {
        getUserDataById(companionId)
            .then((companion) => {
                if (companion) setCompanion(companion)
            })
            .catch(console.log)
    }, [])

    useEffect(() => {
        const lastMessage = messages[messages.length - 1]
        console.log(messages, roomId)
        setLastMessage(lastMessage)
        if (lastMessage?.author) {
            getUserDataById(lastMessage.author)
                .then((author) => {
                    if (author) setAuthor(author)
                })
                .catch(console.log)
        }
    }, [messages])

    return (
        <AppLink to={`/messenger/${roomId}`} className={cls.dialog}>
            <Avatar
                avatarPath={companion?.avatarPath}
                size="M"
                isOnline={companion?.isOnline}
                lastSeenOnline={companion?.lastSeenOnline}
                className={cls.avatar}
            />
            <div className={cls.dialogData}>
                <div className={cls.name}>
                    <div className={cls.companionName}>
                        {companion?.firstName} {companion?.lastName}
                    </div>
                    <div className={cls.messageContainer}>
                        <Avatar avatarPath={author?.avatarPath} className={cls.avatarMsg} />
                        <div className={cls.lastMessageText}>
                            {lastMessage?.textOrPathToFile &&
                            lastMessage?.textOrPathToFile?.length > 50
                                ? lastMessage?.textOrPathToFile.slice(0, 50) + '...'
                                : lastMessage?.textOrPathToFile}
                        </div>
                    </div>
                </div>
                <div className={cls.time}>
                    {dayjs(lastMessage?.createdAt)
                        .locale('ru')
                        .toNow(true) + ' назад'}
                </div>
            </div>
        </AppLink>
    )
}

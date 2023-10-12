import { AppLink } from 'shared/ui/AppLink/AppLink'
import useChat, { MessageData } from 'shared/lib/hook/useChat'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import dayjs from 'dayjs'
import { getUserDataById } from 'shared/api/getUserDataById'
import { Avatar } from 'entities/Avatar'
import RemoveIcon from 'shared/assets/icons/trash-bold.svg'
import cls from './ConversationLink.module.scss'
import { useDispatch } from 'react-redux'
import { removeConversation } from 'features/Messenger'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'

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

    const userData = useAppSelector(getUserData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        getUserDataById(companionId)
            .then((companion) => {
                if (companion) setCompanion(companion)
            })
            .catch(console.log)
    }, [])

    useEffect(() => {
        const lastMessage = messages[messages.length - 1]
        setLastMessage(lastMessage)

        if (lastMessage?.author) {
            getUserDataById(lastMessage.author)
                .then((author) => {
                    if (author) setAuthor(author)
                })
                .catch(console.log)
        }
    }, [messages])

    const onClickRemoveConversation = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(removeConversation({ companionId, roomId, userId: userData.userId }))
    }

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
                            lastMessage?.textOrPathToFile?.length > 20
                                ? lastMessage?.textOrPathToFile.slice(0, 20) + '...'
                                : lastMessage?.textOrPathToFile}
                        </div>
                    </div>
                </div>
                <div className={cls.time}>
                    {dayjs(lastMessage?.createdAt)
                        .locale('ru')
                        .toNow(true) + ' назад'}

                    <RemoveIcon
                        className={cls.removeBtn}
                        id="remove"
                        onClick={(e) => onClickRemoveConversation(e)}
                    />
                </div>
            </div>
        </AppLink>
    )
}

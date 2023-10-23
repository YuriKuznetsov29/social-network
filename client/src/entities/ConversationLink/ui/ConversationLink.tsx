import { AppLink } from 'shared/ui/AppLink/AppLink'
import useChat, { MessageData } from 'shared/lib/hook/useChat'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import dayjs from 'dayjs'
import { getUserDataById } from 'shared/api/getUserDataById'
import { Avatar } from 'entities/Avatar'
import RemoveIcon from 'shared/assets/icons/trash-bold.svg'
import { removeConversation } from 'features/Messenger'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { IMessage } from 'features/Messenger/model/types/message'
import { useTranslation } from 'react-i18next'
import cls from './ConversationLink.module.scss'

interface ConversationLinkProps {
    className?: string
    message: IMessage
    companion: IUser
    conversation: { roomId: string; friendId: string }
}

export const ConversationLink = (props: ConversationLinkProps) => {
    const { className, message, companion, conversation } = props
    const { t, i18n } = useTranslation('pages')
    const [newMessage, setNewMessage] = useState<MessageData | null>(null)
    const [newAuthorLastMessage, setNewAuthorLastMessage] = useState<IUser | null>(null)

    const { messages } = useChat(conversation.roomId)

    const userData = useAppSelector(getUserData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const lastMessage = messages[messages.length - 1]

        if (lastMessage && lastMessage.messageId !== message?.messageId) {
            setNewMessage(lastMessage)

            if (lastMessage?.author) {
                getUserDataById(lastMessage.author)
                    .then((author) => {
                        if (author) setNewAuthorLastMessage(author)
                    })
                    .catch(console.log)
            }
        }
    }, [messages])

    const onClickRemoveConversation = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(
            removeConversation({
                companionId: conversation.friendId,
                roomId: conversation.roomId,
                userId: userData.userId,
                t,
            })
        )
    }

    return (
        <AppLink to={`/messenger/${conversation.roomId}`} className={cls.dialog}>
            <Avatar
                avatarPath={companion.avatarPath}
                size="M"
                isOnline={companion.isOnline}
                lastSeenOnline={companion.lastSeenOnline}
                className={cls.avatar}
            />

            {newMessage && newAuthorLastMessage ? (
                <>
                    <div className={cls.dialogData}>
                        <div className={cls.name}>
                            <div className={cls.companionName}>
                                <div>
                                    {companion?.firstName} {companion?.lastName}
                                </div>
                                <div className={cls.time}>
                                    {dayjs(newMessage.createdAt).locale('ru').toNow(true) +
                                        ' назад'}

                                    <RemoveIcon
                                        className={cls.removeBtn}
                                        id="remove"
                                        onClick={(e) => onClickRemoveConversation(e)}
                                    />
                                </div>
                            </div>
                            <div className={cls.messageContainer}>
                                <Avatar
                                    avatarPath={newAuthorLastMessage.avatarPath}
                                    className={cls.avatarMsg}
                                />
                                <div className={cls.lastMessageText}>
                                    {newMessage.textOrPathToFile &&
                                    newMessage.textOrPathToFile?.length > 30
                                        ? newMessage.textOrPathToFile.slice(0, 30) + '...'
                                        : newMessage.textOrPathToFile}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={cls.dialogData}>
                        <div className={cls.name}>
                            <div className={cls.companionName}>
                                <div>
                                    {companion?.firstName} {companion?.lastName}
                                </div>

                                <div className={cls.time}>
                                    {dayjs(message.createdAt).locale(i18n.language).toNow(true) +
                                        t(' назад')}

                                    <RemoveIcon
                                        className={cls.removeBtn}
                                        id="remove"
                                        onClick={(e) => onClickRemoveConversation(e)}
                                    />
                                </div>
                            </div>
                            <div className={cls.messageContainer}>
                                <Avatar
                                    avatarPath={message.user[0].avatarPath}
                                    className={cls.avatarMsg}
                                />
                                <div className={cls.lastMessageText}>
                                    {message.textOrPathToFile &&
                                    message.textOrPathToFile?.length > 30
                                        ? message.textOrPathToFile.slice(0, 30) + '...'
                                        : message.textOrPathToFile}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </AppLink>
    )
}

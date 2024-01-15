import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import useChat from 'shared/lib/hook/useChat'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useTranslation } from 'react-i18next'
import { MessageList } from 'entities/Message/ui/MessageList/MessageList'
import { MessageInput } from '../MessageInput/MessageInput'
import { DialogHeader } from '../DialogHeader/DialogHeader'
import cls from './Dialog.module.scss'
import { Button } from 'shared/ui/Button/Button'

interface DialogProps {
    className?: string
}

export const Dialog = ({ className }: DialogProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { conversations } = useAppSelector(getUserData)
    const { roomId } = useParams()

    useEffect(() => {
        if (conversations) {
            const dialog = conversations.find((conversation) => conversation.roomId === roomId)
            if (!dialog) {
                navigate('*', { replace: true })
            }
        }
    }, [conversations])

    if (!roomId) {
        return <div>{t('Такого диалога не существует')}</div>
    }

    const { messages, sendMessage, removeMessage, loadMore, hasMore } = useChat(roomId)

    return (
        <div className={cls.container}>
            <ContentContainer className={cls.contentContainer}>
                <DialogHeader roomId={roomId} />
                <MessageList
                    messages={messages}
                    hasMore={hasMore}
                    removeMessage={removeMessage}
                    loadMore={loadMore}
                />
                <MessageInput roomId={roomId} sendMessage={sendMessage} />
            </ContentContainer>
        </div>
    )
}

import { MessageList } from '@/entities/Message/ui/MessageList/MessageList'
import { getUserData } from '@/entities/UserData'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import useChat from '@/shared/lib/hook/useChat'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { DialogHeader } from '../../DialogHeader/DialogHeader'
import { MessageInput } from '../../MessageInput/MessageInput'
import cls from './Dialog.module.scss'

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

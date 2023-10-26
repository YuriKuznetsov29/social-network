import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import useChat from 'shared/lib/hook/useChat'
import { MessageInput } from './MessageInput'
import { DialogHeader } from './DialogHeader'
import { Message } from 'entities/Message'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import cls from './Dialog.module.scss'
import { useTranslation } from 'react-i18next'

interface DialogProps {
    className?: string
}

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

export const Dialog = ({ className }: DialogProps) => {
    const scroll = useRef<HTMLDivElement>(null)
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

    const { messages, sendMessage, removeMessage } = useChat(roomId)

    useEffect(() => {
        if (scroll.current) {
            scroll.current.scrollTop = scroll.current.scrollHeight
        }
    }, [messages])

    return (
        <div className={cls.container}>
            <ContentContainer className={cls.contentContainer}>
                <DialogHeader roomId={roomId} />
                <div className={cls.messagesBlock} ref={scroll}>
                    {messages.map((message) => (
                        <Message
                            message={message}
                            key={message.messageId}
                            removeMessage={removeMessage}
                        />
                    ))}
                </div>
                <MessageInput roomId={roomId} sendMessage={sendMessage} />
            </ContentContainer>
        </div>
    )
}

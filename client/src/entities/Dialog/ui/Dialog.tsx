import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import useChat from 'shared/lib/hook/useChat'
import { MessageInput } from './MessageInput'
import { DialogHeader } from './DialogHeader'
import { Message } from 'entities/Message'
import cls from './Dialog.module.scss'

interface DialogProps {
    className?: string
}

export const Dialog = ({ className }: DialogProps) => {
    const scroll = useRef<HTMLDivElement>(null)

    const { roomId } = useParams()

    if (!roomId) {
        return <div>Такого диалога не существует</div>
    }

    const { log, messages, users, sendMessage, removeMessage } = useChat(roomId)

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
                        <Message message={message} key={message.messageId} />
                    ))}
                </div>
                <MessageInput roomId={roomId} sendMessage={sendMessage} />
            </ContentContainer>
        </div>
    )
}

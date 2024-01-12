import classNames from 'classnames'
import cls from './MessageList.module.scss'
import { useEffect, useRef } from 'react'
import { Message } from '../Message/Message'
import { MessageData } from 'shared/lib/hook/useChat'

interface MessageListProps {
    className?: string
    messages: MessageData[]
    removeMessage: (messageId: string) => void
}

export const MessageList = ({ className, messages, removeMessage }: MessageListProps) => {
    const scroll = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scroll.current) {
            scroll.current.scrollTop = scroll.current.scrollHeight
        }
    }, [messages])

    return (
        <div className={classNames(cls.MessageList, {}, [className])} ref={scroll}>
            {messages.map((message) => (
                <Message message={message} key={message.messageId} removeMessage={removeMessage} />
            ))}
        </div>
    )
}

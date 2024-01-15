import classNames from 'classnames'
import { MutableRefObject, useEffect, useRef } from 'react'
import { Message } from '../Message/Message'
import { MessageData } from 'shared/lib/hook/useChat'
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll'
import cls from './MessageList.module.scss'

interface MessageListProps {
    className?: string
    messages: MessageData[]
    removeMessage: (messageId: string) => void
    loadMore: () => void
    hasMore: boolean
}

export const MessageList = (props: MessageListProps) => {
    const scroll = useRef<HTMLDivElement>(null)

    const { className, messages, removeMessage, loadMore, hasMore } = props

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

    const onScrollLoadMore = () => {
        if (hasMore) {
            loadMore()
        }
    }

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollLoadMore })

    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight
        }
    }, [messages])

    return (
        <div className={classNames(cls.MessageList, {}, [className])} ref={wrapperRef}>
            <div ref={triggerRef} />
            {messages.length > 0 &&
                messages.map((message) => (
                    <Message
                        message={message}
                        key={message.messageId}
                        removeMessage={removeMessage}
                    />
                ))}
        </div>
    )
}

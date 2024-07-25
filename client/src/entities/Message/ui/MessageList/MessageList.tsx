import classNames from 'classnames'
import { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { Message } from '../Message/Message'
import { MessageData } from '@/shared/lib/hook/useChat'
import { useInfiniteScroll } from '@/shared/lib/hook/useInfiniteScroll'
import cls from './MessageList.module.scss'

interface MessageListProps {
    className?: string
    messages: MessageData[]
    removeMessage: (messageId: string) => void
    loadMore: () => void
    hasMore: boolean
}

export const MessageList = (props: MessageListProps) => {
    const { className, messages, removeMessage, loadMore, hasMore } = props

    const lastMessage = messages[messages.length - 1]

    const firstMessage = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

    const onScrollLoadMore = () => {
        if (hasMore) {
            const scrollHeight = wrapperRef.current.scrollHeight
            loadMore()
            wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight - scrollHeight
        }
    }

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollLoadMore })

    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight
        }
    }, [lastMessage?.messageId])

    useLayoutEffect(() => {
        firstMessage.current?.scrollIntoView()
    }, [messages])

    return (
        <div className={classNames(cls.MessageList, {}, [className])} ref={wrapperRef}>
            <div ref={triggerRef} />
            {messages.length > 0 &&
                messages.map((message, i) => {
                    if (i === messages.length - (messages.length - 20)) {
                        return (
                            <Message
                                scrollRef={firstMessage}
                                message={message}
                                key={message.messageId}
                                removeMessage={removeMessage}
                            />
                        )
                    }

                    return (
                        <Message
                            message={message}
                            key={message.messageId}
                            removeMessage={removeMessage}
                        />
                    )
                })}
        </div>
    )
}

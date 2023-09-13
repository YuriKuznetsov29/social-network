import classNames from 'classnames'
import cls from './Dialog.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Button } from 'shared/ui/Button/Button'
import User from 'shared/assets/icons/user.svg'
import Arrow from 'shared/assets/icons/caret-left-bold.svg'
import Plane from 'shared/assets/icons/paper-plane-right-bold.svg'
import { Input } from 'shared/ui/Input/Input'
import { useParams } from 'react-router-dom'
import { MessageData } from 'widgets/Dialog/model/useChat'
import { useCallback, useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import useChat from 'widgets/Dialog/model/useChat'
import React from 'react'
import { Message } from 'widgets/Message'
import { Avatar } from 'widgets/Avatar'

interface DialogProps {
    className?: string
}

export const Dialog = ({ className }: DialogProps) => {
    const [text, setText] = useState('')
    const scroll = useRef(null)

    const { roomId } = useParams()

    const { log, messages, users, sendMessage } = useChat(roomId)

    const { userData } = useAppSelector(getAuthState)

    const onClickSendMessage = () => {
        const message = {
            messageId: nanoid(),
            messageType: 'text',
            textOrPathToFile: text,
            roomId: roomId,
            userId: userData.userId,
            userName: userData.firstName,
            avatarPath: userData.avatarPath,
        }

        sendMessage(message)
        setText('')
    }

    const onEnterSend = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                onClickSendMessage()
            }
        },
        [text]
    )

    useEffect(() => {
        scroll.current.scrollTop = scroll.current.scrollHeight
    }, [messages])

    useEffect(() => {
        document.body.addEventListener('keydown', onEnterSend)
        return () => {
            document.body.removeEventListener('keydown', onEnterSend)
        }
    }, [onEnterSend])

    return (
        <div className={cls.container}>
            <ContentContainer className={cls.contentContainer}>
                <div className={cls.dialogHeader}>
                    <Button className={cls.backButton}>
                        <Arrow /> Назад
                    </Button>
                    Имя диалога
                    <Avatar avatarPath={''} />
                </div>
                <div className={cls.messagesBlock} ref={scroll}>
                    {messages.map((message) => (
                        <Message message={message} key={message.messageId} />
                    ))}
                </div>
                <div className={cls.inputBlock}>
                    <Input
                        placeholder="Напишите сообщение..."
                        className={cls.inputMessage}
                        value={text}
                        onChange={setText}
                    />
                    <Plane className={cls.plane} onClick={onClickSendMessage} />
                </div>
            </ContentContainer>
        </div>
    )
}

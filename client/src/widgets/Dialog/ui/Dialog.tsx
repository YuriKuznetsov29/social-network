import classNames from 'classnames'
import cls from './Dialog.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Button } from 'shared/ui/Button/Button'
import User from 'shared/assets/icons/user.svg'
import Arrow from 'shared/assets/icons/caret-left-bold.svg'
import { Input } from 'shared/ui/Input/Input'
import { useParams } from 'react-router-dom'
import { Message } from 'widgets/Dialog/model/useChat'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import useChat from 'widgets/Dialog/model/useChat'

interface DialogProps {
    className?: string
}

export const Dialog = ({ className }: DialogProps) => {
    const [text, setText] = useState('')

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
        }

        sendMessage(message)
    }

    return (
        <ContentContainer className={cls.contentContainer}>
            <div className={cls.dialogHeader}>
                <Button className={cls.backButton}>
                    <Arrow /> Назад
                </Button>
                Имя диалога
                <User className={cls.dialogIcon} />
            </div>
            <div className={cls.messagesBlock}>
                {messages.map((message) => (
                    <>
                        <div>{message.userName}</div>
                        <div>{message.textOrPathToFile}</div>
                    </>
                ))}
            </div>
            <div className={cls.inputBlock}>
                <Input
                    placeholder="Напишите сообщение..."
                    className={cls.inputMessage}
                    value={text}
                    onChange={setText}
                />
                <Button onClick={onClickSendMessage}>Send</Button>
            </div>
        </ContentContainer>
    )
}

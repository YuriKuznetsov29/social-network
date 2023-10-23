import classNames from 'classnames'
import { Input } from 'shared/ui/Input/Input'
import Plane from 'shared/assets/icons/paper-plane-right-bold.svg'
import { memo, useCallback, useEffect, useState } from 'react'
import { MessageData } from '../../../shared/lib/hook/useChat'
import { nanoid } from 'nanoid'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useTranslation } from 'react-i18next'
import cls from './MessageInput.module.scss'

interface MessageInputProps {
    className?: string
    sendMessage: (message: MessageData) => void
    roomId: string
}

export const MessageInput = memo((props: MessageInputProps) => {
    const { className, sendMessage, roomId } = props
    const { t } = useTranslation('pages')
    const [text, setText] = useState('')

    const userData = useAppSelector(getUserData)

    const onClickSendMessage = () => {
        const message = {
            messageId: nanoid(),
            messageType: 'text',
            textOrPathToFile: text,
            roomId: roomId,
            author: userData.userId,
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
        document.body.addEventListener('keydown', onEnterSend)
        return () => {
            document.body.removeEventListener('keydown', onEnterSend)
        }
    }, [onEnterSend])

    return (
        <div className={classNames(cls.MessageInput, {}, [className])}>
            <Input
                placeholder={t('Напишите сообщение...')}
                className={cls.inputMessage}
                value={text}
                onChange={setText}
            />
            <Plane className={cls.plane} onClick={onClickSendMessage} />
        </div>
    )
})

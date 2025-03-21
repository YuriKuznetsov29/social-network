import { getUserData } from '@/entities/UserData'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useMobile } from '@/shared/lib/hook/useMobile'
import SendIcon from '@mui/icons-material/Send'
import { CardContent, IconButton, Stack, TextField } from '@mui/material'
import { nanoid } from 'nanoid'
import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { MessageData } from '../../../../shared/lib/hook/useChat'
import { MessageInput as MessageInputDeprecated } from '../deprecated/MessageInput/MessageInput'

interface MessageInputProps {
    className?: string
    sendMessage: (message: MessageData) => void
    roomId: string
}

export const MessageInput = memo((props: MessageInputProps) => {
    const { sendMessage, roomId } = props
    const { t } = useTranslation('pages')
    const [text, setText] = useState('')
    const isMobile = useMobile()

    const userData = useAppSelector(getUserData)

    const onClickSendMessage = () => {
        if (text.trim()) {
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
    }

    const onEnterSend = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter' && !e.shiftKey) {
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

    const onBlurScroll = () => {
        if (isMobile) document.documentElement.scrollTop = 0
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <TextField
                            fullWidth
                            placeholder={t('Напишите сообщение...')}
                            variant="outlined"
                            multiline
                            maxRows={4}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onBlur={onBlurScroll}
                        />
                        <IconButton onClick={onClickSendMessage}>
                            <SendIcon />
                        </IconButton>
                    </Stack>
                </CardContent>
            }
            off={<MessageInputDeprecated roomId={roomId} sendMessage={sendMessage} />}
        />
    )
})

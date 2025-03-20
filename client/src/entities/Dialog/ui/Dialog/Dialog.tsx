import { MessageList } from '@/entities/Message/ui/MessageList/MessageList'
import { getUserData } from '@/entities/UserData'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import useChat from '@/shared/lib/hook/useChat'
import { Card, Divider } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { Dialog as DialogDeprecated } from '../deprecated/Dialog/Dialog'
import { DialogHeader } from '../DialogHeader/DialogHeader'
import { MessageInput } from '../MessageInput/MessageInput'

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <DialogHeader roomId={roomId} />
                    <Divider />

                    <MessageList
                        messages={messages}
                        hasMore={hasMore}
                        removeMessage={removeMessage}
                        loadMore={loadMore}
                    />
                    <Divider />
                    <MessageInput roomId={roomId} sendMessage={sendMessage} />
                </Card>
            }
            off={<DialogDeprecated />}
        />
    )
}

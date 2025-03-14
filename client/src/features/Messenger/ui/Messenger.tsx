import { ConversationLink } from '@/entities/ConversationLink'
import { getUserData } from '@/entities/UserData'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { MessengerLoader } from '@/shared/ui/MessengerLoader'
import { Paper } from '@mui/material'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { fetchDialogs } from '../model/services/fetchDialogs'
import { getLoadingDialogStatus } from '../model/services/getLoadingDialogStatus'
import { getDialogs } from '../model/slice/MessengerSlice'
import cls from './Messenger.module.scss'

interface MessengerProps {
    className?: string
}

export const Messenger = ({ className }: MessengerProps) => {
    const userData = useAppSelector(getUserData)
    const dialogs = useAppSelector(getDialogs.selectAll)
    const isLoading = useAppSelector(getLoadingDialogStatus)

    const dispatch = useAppDispatch()
    const { t } = useTranslation('pages')

    useEffect(() => {
        if (userData.conversations && userData.conversations.length) {
            dispatch(fetchDialogs(userData.conversations))
        }
    }, [userData.conversations])

    if (isLoading) return <MessengerLoader />

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        // gap: 1,
                        // justifyContent: 'space-between',
                    }}
                    elevation={1}
                >
                    {userData?.conversations?.length ? (
                        <>
                            {dialogs.map(({ message, companion, conversation }, i) => {
                                return (
                                    <>
                                        <ConversationLink
                                            key={conversation.roomId}
                                            message={message}
                                            companion={companion}
                                            conversation={conversation}
                                        />
                                        {/* {i !== dialogs.length - 1 && <Divider />} */}
                                    </>
                                )
                            })}
                        </>
                    ) : (
                        t('У вас еще нет диалогов')
                    )}
                </Paper>
            }
            off={
                <div data-testid="dialogs" className={classNames(cls.Messenger, {}, [className])}>
                    {userData?.conversations?.length ? (
                        <ContentContainer className={cls.contentContainer}>
                            {dialogs.map(({ message, companion, conversation }) => {
                                return (
                                    <ConversationLink
                                        key={conversation.roomId}
                                        message={message}
                                        companion={companion}
                                        conversation={conversation}
                                    />
                                )
                            })}
                        </ContentContainer>
                    ) : (
                        t('У вас еще нет диалогов')
                    )}
                </div>
            }
        />
    )
}

import classNames from 'classnames'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useEffect } from 'react'
import { ConversationLink } from 'entities/ConversationLink'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useTranslation } from 'react-i18next'
import { MessengerLoader } from 'shared/ui/MessengerLoader'
import { getLoadingDialogStatus } from '../model/services/getLoadingDialogStatus'
import { getDialogs } from '../model/slice/MessengerSlice'
import { fetchDialogs } from '../model/services/fetchDialogs'
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
        <div className={classNames(cls.Messenger, {}, [className])}>
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
    )
}

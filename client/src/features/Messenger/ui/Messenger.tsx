import classNames from 'classnames'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useEffect } from 'react'
import { getConversationUsers } from '../model/services/getConversationUsers'
import { ConversationLink } from 'entities/ConversationLink'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useTranslation } from 'react-i18next'
import cls from './Messenger.module.scss'
import { MessengerLoader } from 'shared/ui/MessengerLoader'
import { Button } from 'shared/ui/Button/Button'
import $api, { API_URL } from 'shared/api/http'
import { getDialogs } from '../model/services/getDialogs'
import { getDialogsData } from '../model/selectors/getDialogsData'
import { getLoadingAuthStatus } from 'features/AuthByEmail'
import { getLoadingDialogStatus } from '../model/services/getLoadingDialogStatus'

interface MessengerProps {
    className?: string
}

export const Messenger = ({ className }: MessengerProps) => {
    const userData = useAppSelector(getUserData)
    const dialogs = useAppSelector(getDialogsData)
    const isLoading = useAppSelector(getLoadingDialogStatus)

    const dispatch = useAppDispatch()
    const { t } = useTranslation('pages')

    useEffect(() => {
        if (userData.conversations && userData.conversations.length) {
            dispatch(getDialogs(userData.conversations))
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

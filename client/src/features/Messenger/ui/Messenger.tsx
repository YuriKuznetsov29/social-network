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

interface MessengerProps {
    className?: string
}

export const Messenger = ({ className }: MessengerProps) => {
    const userData = useAppSelector(getUserData)

    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(getConversationUsers({ userId: userData.userId }))
    }, [])

    return (
        <div className={classNames(cls.Messenger, {}, [className])}>
            {userData?.conversations?.length ? (
                <ContentContainer className={cls.contentContainer}>
                    {userData.conversations.map(({ roomId, friendId }) => {
                        return (
                            <ConversationLink roomId={roomId} companionId={friendId} key={roomId} />
                        )
                    })}
                </ContentContainer>
            ) : (
                t('У вас еще нет диалогов')
            )}
        </div>
    )
}

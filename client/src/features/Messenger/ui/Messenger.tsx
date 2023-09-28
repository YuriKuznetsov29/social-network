import classNames from 'classnames'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useEffect } from 'react'
import { getConversationUsers } from '../model/services/getConversationUsers'
import { ConversationLink } from 'entities/ConversationLink'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import cls from './Messenger.module.scss'

interface MessengerProps {
    className?: string
}

export const Messenger = ({ className }: MessengerProps) => {
    const userData = useAppSelector(getUserData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getConversationUsers({ userId: userData.userId }))
    }, [])

    return (
        <div className={classNames(cls.Messenger, {}, [className])}>
            <ContentContainer className={cls.contentContainer}>
                {/* <Input placeholder="Поиск" className={cls.inputSearch} /> */}
                {userData.conversations.map(({ roomId, friendId }) => {
                    return <ConversationLink roomId={roomId} companionId={friendId} key={roomId} />
                })}
            </ContentContainer>
        </div>
    )
}

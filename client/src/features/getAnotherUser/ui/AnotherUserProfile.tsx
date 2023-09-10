import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAnotherUserState } from '../model/selectors/getAnotherUserState'
import User from 'shared/assets/icons/user.svg'
import { Button } from 'shared/ui/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getAnotherUserData } from '../model/services/getAnotherUserData'
import { SERVER_URL } from '../../../http/index'
import { addConversation, addFriend, removeFriend } from 'features/AuthByEmail'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { nanoid } from 'nanoid'
import cls from './AnotherUserProfile.module.scss'

interface AnotherUserProfileProps {
    className?: string
}

export const AnotherUserProfile = ({ className }: AnotherUserProfileProps) => {
    const { userData } = useAppSelector(getAnotherUserState)
    const {
        userData: { userId, friends },
    } = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()
    const { anotherUserId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAnotherUserData({ userId: anotherUserId }))
    }, [])

    const onClickAddFriend = () => {
        console.log({ friendId: anotherUserId, userId: userData.userId })
        dispatch(addFriend({ friendId: anotherUserId, userId }))
    }

    const onClickRemoveFriend = () => {
        dispatch(removeFriend({ friendId: anotherUserId, userId }))
    }

    const isFriend = () => {
        return friends.includes(anotherUserId)
    }

    const isConversationCreated = () => {
        return userData.conversations.find(
            (conversation) => conversation.friendId === anotherUserId
        )
    }

    const createConversation = () => {
        const conversation = isConversationCreated()

        if (conversation) {
            navigate(`/${conversation.roomId}`)
        } else {
            const roomId = nanoid()
            dispatch(
                addConversation({
                    roomId,
                    friendId: anotherUserId,
                    userId,
                })
            )
            navigate(`/${roomId}`)
        }
    }

    return (
        <div className={classNames(cls.AnotherUserProfile, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                <div className={cls.dataWrapper}>
                    {userData.avatarPath ? (
                        <img
                            className={cls.user}
                            src={SERVER_URL + userData.avatarPath}
                            alt="avatar"
                        />
                    ) : (
                        <User className={cls.user} />
                    )}
                    {isFriend() ? (
                        <Button onClick={onClickRemoveFriend}>Удалить из друзей</Button>
                    ) : (
                        <Button onClick={onClickAddFriend}>Добавить в друзья</Button>
                    )}

                    <Button onClick={createConversation}>Написать сообщение</Button>
                </div>

                <div className={cls.dataWrapper}>
                    <div>{userData.firstName}</div>
                    <div>{userData.lastName}</div>
                    <div>{userData.email}</div>
                    <div>{userData.gender}</div>
                    <div>{userData.birthDay}</div>
                </div>
            </ContentContainer>
        </div>
    )
}

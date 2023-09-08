import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAnotherUserState } from '../model/selectors/getAnotherUserState'
import User from 'shared/assets/icons/user.svg'
import { Button } from 'shared/ui/Button/Button'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getAnotherUserData } from '../model/services/getAnotherUserData'
import cls from './AnotherUserProfile.module.scss'
import { SERVER_URL } from '../../../http/index'
import { addFriend, removeFriend } from 'features/AuthByEmail'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'

interface AnotherUserProfileProps {
    className?: string
}

export const AnotherUserProfile = ({ className }: AnotherUserProfileProps) => {
    const { userData } = useAppSelector(getAnotherUserState)
    const {
        userData: { userId: currentUserId },
    } = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()
    const { userId } = useParams()

    useEffect(() => {
        dispatch(getAnotherUserData({ userId }))
    }, [])

    const onClickAddFriend = () => {
        console.log({ friendId: userId, userId: userData.userId })
        dispatch(addFriend({ friendId: userId, userId: currentUserId }))
    }

    const onClickRemoveFriend = () => {
        dispatch(removeFriend({ friendId: userId, userId: currentUserId }))
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
                    <Button onClick={onClickAddFriend}>Добавить в друзья</Button>
                    <Button onClick={onClickRemoveFriend}>Удалить из друзей</Button>
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

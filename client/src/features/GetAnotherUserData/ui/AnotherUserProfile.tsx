import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getAnotherUserState } from '../model/selectors/getAnotherUserState'
import { useNavigate, useParams } from 'react-router-dom'
import { IPost, getPostHandlerState, getUserPosts } from 'features/PostHandler'
import { useEffect } from 'react'
import { getAnotherUserData } from '../model/services/getAnotherUserData'
import { nanoid } from 'nanoid'
import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Avatar } from 'entities/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Conversations } from 'features/AuthByEmail/model/types/response/Conversations'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { addFriend, removeFriend } from 'features/GetFriendsData'
import { addConversation } from 'features/Messenger'
import { useTranslation } from 'react-i18next'
import { getAnotherUserInit } from '../model/selectors/getAnotherUserInit'
import { AnotherUserLoader } from 'shared/ui/AnotherUserLoader'
import BirthIcon from 'shared/assets/icons/gift-bold.svg'
import HomeIcon from 'shared/assets/icons/house-bold.svg'
import FriendsIcon from 'shared/assets/icons/users-bold.svg'
import PostIcon from 'shared/assets/icons/note-pencil-bold.svg'
import cls from './AnotherUserProfile.module.scss'
import { PostsList } from 'entities/Post'

interface AnotherUserProfileProps {
    className?: string
}

export const AnotherUserProfile = ({ className }: AnotherUserProfileProps) => {
    const { userData, error } = useAppSelector(getAnotherUserState)
    const currentUserData = useAppSelector(getUserData)
    const { t, i18n } = useTranslation('pages')
    const { userId, friends } = useAppSelector(getUserData)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { anotherUserId } = useParams()
    const anotherUserInit = useAppSelector(getAnotherUserInit)

    useEffect(() => {
        if (error) {
            navigate('*', { replace: true })
        }
    }, [error])

    useEffect(() => {
        if (userId === anotherUserId) {
            navigate('/profile', { replace: true })
        }
    }, [userId])

    useEffect(() => {
        if (anotherUserId) {
            dispatch(getAnotherUserData({ userId: anotherUserId }))
            dispatch(getUserPosts({ author: anotherUserId }))
        }
    }, [anotherUserId])

    const onClickAddFriend = () => {
        if (anotherUserId) {
            dispatch(
                addFriend({
                    friendId: anotherUserId,
                    userId,
                    friendFirstName: userData.firstName,
                    friendLastName: userData.lastName,
                    t,
                })
            )
        }
    }

    const onClickRemoveFriend = () => {
        if (anotherUserId) {
            dispatch(
                removeFriend({
                    friendId: anotherUserId,
                    userId,
                    friendFirstName: userData.firstName,
                    friendLastName: userData.lastName,
                    t,
                })
            )
        }
    }

    const isFriend = () => {
        if (anotherUserId && friends) {
            return friends.includes(anotherUserId)
        }
    }

    const isConversationCreated = () => {
        return currentUserData.conversations?.find(
            (conversation: Conversations) => conversation.friendId === anotherUserId
        )
    }

    const createConversation = () => {
        const conversation = isConversationCreated()
        if (conversation) {
            navigate(`/messenger/${conversation.roomId}`)
        } else if (anotherUserId) {
            const roomId = nanoid()

            dispatch(
                addConversation({
                    roomId,
                    friendId: anotherUserId,
                    userId,
                    navigate,
                })
            )
        }
    }

    if (!anotherUserInit) return <AnotherUserLoader />

    return (
        <div className={classNames(cls.AnotherUserProfile, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                <div className={cls.dataWrapper}>
                    <Avatar
                        avatarPath={userData.avatarPath}
                        size="XL"
                        isOnline={userData.isOnline}
                        lastSeenOnline={userData.lastSeenOnline}
                        className={cls.avatar}
                    />
                    <h2 className={cls.name}>
                        <div>{userData.firstName}</div>
                        <div>{userData.lastName}</div>
                    </h2>
                </div>
                <div>
                    <div className={cls.valueContainer}>
                        <div>
                            <div className={cls.valueTitle}>
                                <BirthIcon className={cls.icon} />
                                {t('День рождения')}
                            </div>
                            <div className={cls.valueTitle}>
                                <HomeIcon className={cls.icon} />
                                {t('Город')}
                            </div>
                            <div className={cls.valueTitle}>
                                <FriendsIcon className={cls.icon} />
                                {t('Друзья ')}
                            </div>
                            <div className={cls.valueTitle}>
                                <PostIcon className={cls.icon} />
                                {t('Посты')}
                            </div>
                        </div>
                        <div className={cls.dataWrapper}>
                            <div>{userData.birthDay}</div>
                            <div>Новодвинск</div>
                            <div>{userData.friends?.length}</div>
                            <div>{userData?.posts}</div>
                        </div>
                    </div>
                    <div className={cls.btnBlock}>
                        {isFriend() ? (
                            <Button className={cls.friendBtn} onClick={onClickRemoveFriend}>
                                {t('Удалить из друзей')}
                            </Button>
                        ) : (
                            <Button className={cls.friendBtn} onClick={onClickAddFriend}>
                                {t('Добавить в друзья')}
                            </Button>
                        )}

                        <Button onClick={createConversation}>{t('Написать сообщение')}</Button>
                    </div>
                </div>
            </ContentContainer>
            <PostsList />
        </div>
    )
}

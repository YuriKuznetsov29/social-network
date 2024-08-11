import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { Avatar } from '@/entities/Avatar'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { IUser, getUserData } from '@/entities/UserData'
import {
    getAllFriends,
    getFriendsData,
    getFriendsLoadingStatus,
    removeFriend,
} from '@/features/GetFriendsData'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useEffect, useState } from 'react'
import { Conversations } from '@/features/AuthByEmail/model/types/response/Conversations'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { addConversation } from '@/features/Messenger'
import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import BirthIcon from '@/shared/assets/icons/gift-bold.svg'
import HomeIcon from '@/shared/assets/icons/house-bold.svg'
import FriendsIcon from '@/shared/assets/icons/users-bold.svg'
import PostIcon from '@/shared/assets/icons/note-pencil-bold.svg'
import dayjs from 'dayjs'
import cls from './FriendsList.module.scss'
import { AnotherUserLoader } from '@/shared/ui/AnotherUserLoader'
import { Input } from '@/shared/ui/Input/Input'

interface FriendsListProps {
    className?: string
}

export const FriendsList = ({ className }: FriendsListProps) => {
    const { userId, conversations } = useAppSelector(getUserData)
    const friends = useAppSelector(getFriendsData)
    const isLoading = useAppSelector(getFriendsLoadingStatus)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('pages')

    const [time, setTime] = useState(Date.now() + '')

    useEffect(() => {
        if (userId) dispatch(getAllFriends(userId))
    }, [userId])

    const onClickRemoveFriend = (
        friendId: string,
        friendFirstName: string,
        friendLastName: string
    ) => {
        dispatch(removeFriend({ friendId, userId, friendFirstName, friendLastName }))
    }

    const isConversationCreated = (anotherUserId: string) => {
        return conversations?.find(
            (conversation: Conversations) => conversation.friendId === anotherUserId
        )
    }

    const createConversation = (friendId: string) => {
        const conversation = isConversationCreated(friendId)
        if (conversation) {
            navigate(`/messenger/${conversation.roomId}`)
        } else {
            const roomId = nanoid()

            dispatch(
                addConversation({
                    roomId,
                    friendId,
                    userId,
                    navigate,
                })
            )
        }
    }

    if (isLoading) {
        return <AnotherUserLoader />
    }

    // const up = () => {
    //     setTime((prev) => +prev + 1000 + '')
    // }

    // const down = () => {
    //     setTime((prev) => +prev - 1000 + '')
    // }

    return (
        <>
            {friends.length ? (
                <div data-testid="friends" className={cls.listContainer}>
                    {friends.map((friend: IUser) => (
                        <ContentContainer className={cls.contentWrapper} key={friend.userId}>
                            <div className={cls.dataWrapper}>
                                <Avatar
                                    avatarPath={friend.avatarPath}
                                    size="XL"
                                    isOnline={friend.isOnline}
                                    lastSeenOnline={friend.lastSeenOnline}
                                    className={cls.avatar}
                                />
                                <h2 className={cls.name}>
                                    <div>{friend.firstName}</div>
                                    <div>{friend.lastName}</div>
                                </h2>
                            </div>

                            <div className={cls.valueWrapper}>
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
                                    <div>
                                        <div>
                                            {dayjs(friend.birthDay.split('.').reverse().join('-'))
                                                .locale('ru')
                                                .format('D MMMM YYYY')}
                                        </div>
                                        <div>{friend.city}</div>
                                        <div>{friend.friends?.length}</div>
                                        <div>5</div>
                                    </div>
                                </div>

                                <Button
                                    className={cls.addFriendBtn}
                                    onClick={() =>
                                        onClickRemoveFriend(
                                            friend.userId,
                                            friend.firstName,
                                            friend.lastName
                                        )
                                    }
                                >
                                    {t('Удалить из друзей')}
                                </Button>

                                <Button
                                    className={cls.messageBtn}
                                    onClick={() => createConversation(friend.userId)}
                                >
                                    {t('Написать сообщение')}
                                </Button>
                            </div>
                        </ContentContainer>
                    ))}
                    {/* <Input value={time} onChange={setTime} />
                    <div>{new Date(+time).toDateString()}</div>
                    <button onClick={up}>+</button>
                    <button onClick={down}>-</button>
                    {dayjs(new Date(+time))
                        .locale(i18n.language + '-short')
                        .toNow(true)} */}
                </div>
            ) : (
                <div data-testid="friends-page">{t('У вас еще нет друзей')}</div>
            )}
        </>
    )
}

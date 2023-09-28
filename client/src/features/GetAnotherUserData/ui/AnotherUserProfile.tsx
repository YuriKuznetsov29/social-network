import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getAnotherUserState } from '../model/selectors/getAnotherUserState'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { useNavigate, useParams } from 'react-router-dom'
import { IPost, getPostHandlerState, getUserPosts } from 'features/PostHandler'
import { useEffect } from 'react'
import { getAnotherUserData } from '../model/services/getAnotherUserData'
import { addConversation, addFriend, removeFriend } from 'features/AuthByEmail'
import { nanoid } from 'nanoid'
import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Avatar } from 'entities/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Post } from 'entities/Post'
import { Conversations } from 'features/AuthByEmail/model/types/response/Conversations'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import cls from './AnotherUserProfile.module.scss'
import { getUserData } from 'entities/UserData'

interface AnotherUserProfileProps {
    className?: string
}

export const AnotherUserProfile = ({ className }: AnotherUserProfileProps) => {
    const { userData } = useAppSelector(getAnotherUserState)
    // const { userData: currentUserData } = useAppSelector(getAuthState)
    const currentUserData = useAppSelector(getUserData)

    const { userId, friends } = useAppSelector(getUserData)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { anotherUserId } = useParams()

    const { posts } = useAppSelector(getPostHandlerState)

    useEffect(() => {
        if (anotherUserId) {
            dispatch(getUserPosts({ author: anotherUserId }))
            dispatch(getAnotherUserData({ userId: anotherUserId }))
        }
    }, [])

    const onClickAddFriend = () => {
        if (anotherUserId) {
            dispatch(addFriend({ friendId: anotherUserId, userId }))
        }
    }

    const onClickRemoveFriend = () => {
        if (anotherUserId) {
            dispatch(removeFriend({ friendId: anotherUserId, userId }))
        }
    }

    const isFriend = () => {
        if (anotherUserId) {
            return friends.includes(anotherUserId)
        }
    }

    const isConversationCreated = () => {
        console.log(currentUserData.conversations, anotherUserId)

        return currentUserData.conversations?.find(
            (conversation: Conversations) => conversation.friendId === anotherUserId
        )
    }

    const createConversation = () => {
        const conversation = isConversationCreated()
        console.log('find', conversation)
        if (conversation) {
            navigate(`/messenger/${conversation.roomId}`)
        } else if (anotherUserId) {
            const roomId = nanoid()
            console.log({
                roomId,
                friendId: anotherUserId,
                userId,
            })
            dispatch(
                addConversation({
                    roomId,
                    friendId: anotherUserId,
                    userId,
                })
            )
            navigate(`/messenger/${roomId}`)
        }
    }

    return (
        <div className={classNames(cls.AnotherUserProfile, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                <div className={cls.dataWrapper}>
                    <Avatar
                        avatarPath={userData.avatarPath}
                        size="XL"
                        isOnline={userData.isOnline}
                        lastSeenOnline={userData.lastSeenOnline}
                    />
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
            {posts.map((post: IPost) => (
                <Post post={post} key={post._id} />
            ))}
        </div>
    )
}

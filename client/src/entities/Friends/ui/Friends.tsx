import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from 'entities/Avatar'
import { getAllFriends, getFriendsState } from 'features/GetFriendsData'
import { IUser, getUserData } from 'entities/UserData'
import cls from './Friends.module.scss'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'

interface FriendsProps {
    className?: string
}

export const Friends = ({ className }: FriendsProps) => {
    const { userId } = useAppSelector(getUserData)
    const { friends } = useAppSelector(getFriendsState)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllFriends({ userId }))
    }, [])

    return (
        <div className={classNames(cls.Friends, {}, [className])}>
            <ContentContainer className={cls.container}>
                <h3>Друзья</h3>

                <div className={cls.friendsWrapper}>
                    {friends
                        ? friends.map((friend: IUser) => {
                              return (
                                  <div
                                      className={cls.friend}
                                      key={friend.userId}
                                      onClick={() => navigate(`/${friend.userId}`)}
                                  >
                                      <Avatar
                                          avatarPath={friend.avatarPath}
                                          size="M"
                                          isOnline={friend.isOnline}
                                          lastSeenOnline={friend.lastSeenOnline}
                                      />
                                      <div>{friend.firstName}</div>
                                  </div>
                              )
                          })
                        : 'У вас еще нет друзей'}
                </div>
            </ContentContainer>
        </div>
    )
}

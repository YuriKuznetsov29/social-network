import classNames from 'classnames'
import cls from './Friends.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { useEffect } from 'react'
import { getAllFriends } from 'features/AuthByEmail'
import { SERVER_URL } from '../../../http/index'
import { useNavigate } from 'react-router-dom'

interface FriendsProps {
    className?: string
}

export const Friends = ({ className }: FriendsProps) => {
    const {
        friends,
        userData: { userId },
    } = useAppSelector(getAuthState)
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
                        ? friends.map((friend) => {
                              return (
                                  <div
                                      className={cls.friend}
                                      key={friend.userId}
                                      onClick={() => navigate(`/${friend.userId}`)}
                                  >
                                      {friend.avatarPath ? (
                                          <img
                                              className={cls.user}
                                              src={SERVER_URL + friend.avatarPath}
                                              alt="avatar"
                                          />
                                      ) : (
                                          <User className={cls.user} />
                                      )}
                                      {friend.firstName} {friend.lastName}
                                  </div>
                              )
                          })
                        : 'У вас еще нет друзей'}
                </div>
            </ContentContainer>
        </div>
    )
}

import { Avatar } from '@/entities/Avatar'
import { IUser, getUserData } from '@/entities/UserData'
import { getAllFriends, getFriendsState, getInitFriendsStatus } from '@/features/GetFriendsData'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { FriendsLoader } from '@/shared/ui/FriendsLoader'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import cls from './Friends.module.scss'

interface FriendsProps {
    className?: string
}

export const Friends = ({ className }: FriendsProps) => {
    const { userId } = useAppSelector(getUserData)
    const { friends } = useAppSelector(getFriendsState)
    const initStatus = useAppSelector(getInitFriendsStatus)
    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userId) {
            dispatch(getAllFriends(userId))
        }
    }, [userId])

    if (!initStatus) return <FriendsLoader />

    return (
        <div className={classNames(cls.Friends, {}, [className])}>
            <ContentContainer className={cls.container}>
                <h3 className={cls.title}>{t('Друзья')}</h3>

                <div className={cls.friendsWrapper}>
                    {friends.length
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
                        : t('У вас еще нет друзей')}
                </div>
            </ContentContainer>
        </div>
    )
}

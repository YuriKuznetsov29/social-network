import classNames from 'classnames'
import cls from './WhoLikesIt.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { getFriendsState } from 'features/GetFriendsData'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { IUser } from 'entities/UserData'
import { useNavigate } from 'react-router-dom'
import { Avatar } from 'entities/Avatar'
import { useTranslation } from 'react-i18next'

interface WhoLikesItProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const WhoLikesIt = ({ className, isOpen, onClose }: WhoLikesItProps) => {
    const { friends } = useAppSelector(getFriendsState)
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('pages')

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={cls.background}>
            <div className={cls.usersWrapper}>
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
                    : 'У вас еще нет друзей'}
            </div>
        </Modal>
    )
}

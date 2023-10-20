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
import { getLikesUsersData } from '../model/selectors/getLikesUsersData'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getWhoLikesUsers } from '../model/services/getWhoLikesUsers'
import { Loader } from 'shared/ui/Loader'
import { getLikesLoading } from '../model/selectors/getLikesLoading'
import { WhoLikesItLoader } from 'shared/ui/WhoLikesItLoader/WhoLikesItLoader'

interface WhoLikesItProps {
    isOpen: boolean
    onClose: () => void
    postId: string
}

export const WhoLikesIt = ({ isOpen, onClose, postId }: WhoLikesItProps) => {
    const users = useAppSelector(getLikesUsersData)
    const isLoading = useAppSelector(getLikesLoading)
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('pages')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isOpen) dispatch(getWhoLikesUsers(postId))
    }, [isOpen])

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={cls.background}>
            <div className={cls.usersWrapper}>
                {isLoading ? (
                    <WhoLikesItLoader />
                ) : users.length ? (
                    users.map((friend: IUser) => {
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
                ) : (
                    'Пост еще никому не понравился'
                )}
            </div>
        </Modal>
    )
}

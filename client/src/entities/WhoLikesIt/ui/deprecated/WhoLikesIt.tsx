import { Avatar } from '@/entities/Avatar'
import { IUser } from '@/entities/UserData'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { Modal } from '@/shared/ui/Modal/Modal'
import { WhoLikesItLoader } from '@/shared/ui/WhoLikesItLoader/WhoLikesItLoader'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { getLikesLoading } from '../../model/selectors/getLikesLoading'
import { getLikesUsersData } from '../../model/selectors/getLikesUsersData'
import { getWhoLikesUsers } from '../../model/services/getWhoLikesUsers'
import cls from './WhoLikesIt.module.scss'

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

    const onClickShowUser = (userId: string) => {
        navigate(`/${userId}`)
        document.body.style.overflow = 'auto'
    }

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
                                onClick={() => onClickShowUser(friend.userId)}
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
                    t('Пост еще никому не понравился')
                )}
            </div>
        </Modal>
    )
}

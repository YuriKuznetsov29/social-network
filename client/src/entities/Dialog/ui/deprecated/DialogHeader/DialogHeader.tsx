import { Avatar } from '@/entities/Avatar'
import { getUserData } from '@/entities/UserData'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { getUserDataById } from '@/shared/api/getUserDataById'
import Arrow from '@/shared/assets/icons/caret-left-bold.svg'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import classNames from 'classnames'
import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import cls from './DialogHeader.module.scss'

interface DialogHeaderProps {
    className?: string
    roomId: string
}

export const DialogHeader = memo(({ className, roomId }: DialogHeaderProps) => {
    const [companion, setCompanion] = useState<IUser | null>(null)
    const { t } = useTranslation('pages')

    const userData = useAppSelector(getUserData)

    useEffect(() => {
        if (userData.conversations) {
            const friend = userData.conversations.find(
                (conversation) => conversation.roomId === roomId
            )

            if (friend) {
                const { friendId } = friend
                getUserDataById(friendId)
                    .then((companion) => {
                        if (companion) setCompanion(companion)
                    })
                    .catch(console.log)
            }
        }
    }, [userData.conversations])

    return (
        <div className={classNames(cls.DialogHeader, {}, [className])}>
            <Link to={'/messenger'} className={cls.backButton}>
                <Arrow className={cls.icon} /> {t('Назад')}
            </Link>
            {companion?.firstName} {companion?.lastName}
            <Avatar
                avatarPath={companion?.avatarPath}
                size="M"
                isOnline={companion?.isOnline}
                click
                userId={companion?.userId}
            />
        </div>
    )
})

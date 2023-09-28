import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Avatar } from 'entities/Avatar'
import Arrow from 'shared/assets/icons/caret-left-bold.svg'
import { useEffect, useState } from 'react'
import { getUserDataById } from 'app/services/getUserDataById'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { IUser } from 'entities/UserData/model/types/IUser'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import cls from './DialogHeader.module.scss'
import { getUserData } from 'entities/UserData'

interface DialogHeaderProps {
    className?: string
    roomId: string
}

export const DialogHeader = ({ className, roomId }: DialogHeaderProps) => {
    const [companion, setCompanion] = useState<IUser | null>(null)

    const userData = useAppSelector(getUserData)

    useEffect(() => {
        const friend = userData.conversations.find((conversation) => conversation.roomId === roomId)

        if (friend) {
            const { friendId } = friend
            getUserDataById(friendId)
                .then((companion) => {
                    if (companion) setCompanion(companion)
                })
                .catch(console.log)
        }
    }, [])

    return (
        <div className={classNames(cls.DialogHeader, {}, [className])}>
            <Link to={'/messenger'} className={cls.backButton}>
                <Arrow /> Назад
            </Link>
            {companion?.firstName} {companion?.lastName}
            <Avatar avatarPath={companion?.avatarPath} />
        </div>
    )
}

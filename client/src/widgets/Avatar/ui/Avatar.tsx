import classNames from 'classnames'
import { SERVER_URL } from '../../../http/index'
import User from 'shared/assets/icons/user.svg'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    avatarPath: string
}

export const Avatar = ({ className, avatarPath }: AvatarProps) => {
    return (
        <div className={classNames(cls.Avatar, {}, [])}>
            {avatarPath ? (
                <img
                    className={classNames(cls.user, {}, [className])}
                    src={SERVER_URL + avatarPath}
                    alt="avatar"
                />
            ) : (
                <User className={classNames(cls.user, {}, [className])} />
            )}
        </div>
    )
}

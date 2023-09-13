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
        <div className={classNames(cls.Avatar, {}, [className])}>
            {avatarPath ? (
                <img className={cls.user} src={SERVER_URL + avatarPath} alt="avatar" />
            ) : (
                <User className={cls.user} />
            )}
        </div>
    )
}

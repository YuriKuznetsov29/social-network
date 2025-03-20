import { Avatar } from '@/entities/Avatar'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { IComment } from '@/features/PostHandler/model/types/comment'
import { getUserDataById } from '@/shared/api/getUserDataById'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Comment.module.scss'

interface CommentProps {
    className?: string
    comment: IComment
}

export const Comment = ({ className, comment }: CommentProps) => {
    const [userData, setUserData] = useState<IUser | null>(null)

    const { t, i18n } = useTranslation('pages')

    useEffect(() => {
        getUserDataById(comment.author)
            .then((user) => {
                if (user) setUserData(user)
            })
            .catch(console.log)
    }, [])

    return (
        <div data-testid="comment" className={classNames(cls.Comment, {}, [className])}>
            <Avatar
                avatarPath={userData?.avatarPath}
                size="MS"
                className={cls.avatar}
                click
                userId={comment.author}
            />
            <div>
                <div className={cls.header}>
                    <div>{userData?.firstName}</div>
                    <div className={cls.time} data-testid="time">
                        {dayjs(comment.createdAt).locale(i18n.language).toNow(true) + t(' назад')}
                    </div>
                </div>
                <div data-testid="comment-text" className={cls.text}>
                    {comment.body}
                </div>
            </div>
        </div>
    )
}

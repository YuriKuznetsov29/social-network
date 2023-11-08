import classNames from 'classnames'
import { IComment } from 'features/PostHandler/model/types/comment'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import { Avatar } from 'entities/Avatar'
import dayjs from 'dayjs'
import { getUserDataById } from 'shared/api/getUserDataById'
import cls from './Comment.module.scss'
import { useTranslation } from 'react-i18next'

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
                <div data-testid="body" className={cls.text}>
                    {comment.body}
                </div>
            </div>
        </div>
    )
}

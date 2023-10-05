import classNames from 'classnames'
import cls from './Comment.module.scss'
import { IComment } from 'features/PostHandler/model/types/comment'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import { API_URL } from '../../../shared/api/http/index'
import $api from '../../../shared/api/http/index'
import { Avatar } from 'entities/Avatar'
import dayjs from 'dayjs'

interface CommentProps {
    className?: string
    comment: IComment
}

interface ResponseDataUser {
    user: IUser
}

export const Comment = ({ className, comment }: CommentProps) => {
    const [userData, setUserData] = useState<IUser | null>(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await $api.get<ResponseDataUser>(
                    `${API_URL}/user/${comment.author}`
                )
                setUserData(response.data.user)
            } catch (e: unknown) {
                console.log(e)
            }
        }

        fetchUserData()
    }, [])

    return (
        <div className={classNames(cls.Comment, {}, [className])}>
            <Avatar avatarPath={userData?.avatarPath} size="MS" className={cls.avatar} />
            <div>
                <div className={cls.header}>
                    <div>{userData?.firstName}</div>
                    <div className={cls.time}>
                        {dayjs(comment.createdAt).locale('ru').toNow(true) + ' назад'}
                    </div>
                </div>
                <div className={cls.text}>{comment.body}</div>
            </div>
        </div>
    )
}

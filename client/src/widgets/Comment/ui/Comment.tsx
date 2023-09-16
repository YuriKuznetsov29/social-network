import classNames from 'classnames'
import cls from './Comment.module.scss'
import { IComment } from 'features/PostHandler/model/types/comment'
import { useEffect, useState } from 'react'
import { Avatar } from 'widgets/Avatar'
import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { API_URL } from '../../../http/index'
import $api from '../../../http/index'

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
            <Avatar avatarPath={userData?.avatarPath} />
            <div>
                <div>{userData?.firstName}</div>
                <div>{comment.body}</div>
            </div>
        </div>
    )
}
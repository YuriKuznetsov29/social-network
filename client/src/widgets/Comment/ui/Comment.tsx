import classNames from 'classnames'
import cls from './Comment.module.scss'
import { IComment } from 'features/PostHandler/model/types/comment'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAnotherUserData } from 'features/getAnotherUser/model/services/getAnotherUserData'
import { getAnotherUserState } from 'features/getAnotherUser/model/selectors/getAnotherUserState'
import { Avatar } from 'widgets/Avatar'

interface CommentProps {
    className?: string
    comment: IComment
}

export const Comment = ({ className, comment }: CommentProps) => {
    const dispatch = useAppDispatch()
    const { userData } = useAppSelector(getAnotherUserState)

    useEffect(() => {
        dispatch(getAnotherUserData({ userId: comment.author }))
    }, [])

    return (
        <div className={classNames(cls.Comment, {}, [className])}>
            <Avatar avatarPath={userData.avatarPath} />
            <div>
                <div>{userData.firstName}</div>
                <div>{comment.body}</div>
            </div>
        </div>
    )
}

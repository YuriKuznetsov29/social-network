import classNames from 'classnames'
import cls from './Post.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { IPost } from 'features/PostHandler/model/types/post'
import $api, { API_URL, SERVER_URL } from '../../../http/index'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { Input } from 'shared/ui/Input/Input'
import Plane from 'shared/assets/icons/paper-plane-right-bold.svg'
import { useState } from 'react'
import { createComment } from 'features/PostHandler'

interface PostProps {
    className?: string
    post: IPost
}

function nl2br(str: string) {
    return { __html: str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + `<br />`) }
}

export const Post = ({ className, post }: PostProps) => {
    const [commentText, setCommentText] = useState('')
    const { userData } = useAppSelector(getAuthState)
    const [showCommentInput, setShowCommentInput] = useState(false)

    const dispatch = useAppDispatch()

    const onClickToggleLike = () => {
        $api.post(`${API_URL}/post/toggleLike`, {
            author: userData.userId,
            postId: post._id,
        })
    }

    const onClickToggleComment = () => {
        setShowCommentInput((prev) => !prev)
    }

    const onClickWriteComment = () => {
        dispatch(createComment({ author: userData.userId, body: commentText, postId: post._id }))
    }

    return (
        <ContentContainer className={cls.container}>
            <div dangerouslySetInnerHTML={nl2br(post.text || '')} />
            {post.imagePath && (
                <img className={cls.image} src={SERVER_URL + post.imagePath} alt="image" />
            )}
            <div className={cls.btnContainer}>
                <Button onClick={onClickToggleComment}>Комментарий</Button>
                <div>{post.likes}</div>
                <Button onClick={onClickToggleLike}>Like</Button>
            </div>
            <div
                className={classNames(cls.inputBlock, { [cls.show]: showCommentInput }, [
                    className,
                ])}
            >
                <Input
                    placeholder="Напиcать комментарий..."
                    className={cls.inputMessage}
                    value={commentText}
                    onChange={setCommentText}
                />
                <Plane className={cls.plane} onClick={onClickWriteComment} />
            </div>
        </ContentContainer>
    )
}

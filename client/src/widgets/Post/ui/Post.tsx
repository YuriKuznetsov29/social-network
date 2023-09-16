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
import { useEffect, useRef, useState } from 'react'
// import { createComment, getCommentsForPost, getPostHandlerState } from 'features/PostHandler'
import { Comment } from 'widgets/Comment'
import { IComment } from 'features/PostHandler/model/types/comment'
import { PostHandlerResponse } from 'features/PostHandler/model/types/postHandlerResponse'
import Heart from 'shared/assets/icons/iconmonstr-favorite-5.svg'
import CommentBtn from 'shared/assets/icons/chat-bold.svg'
import dayjs from 'dayjs'
interface PostProps {
    className?: string
    post: IPost
}

function nl2br(str: string) {
    return { __html: str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + `<br />`) }
}

interface ResponseCommentsData {
    comments: IComment[]
}

interface ResponseIsLikedData {
    liked: boolean
}

export const Post = ({ className, post }: PostProps) => {
    const [commentText, setCommentText] = useState('')
    const [showCommentInput, setShowCommentInput] = useState(false)
    const [comments, setComments] = useState<IComment[] | null>(null)
    const [likes, setLikes] = useState(post.likes)
    const [likesActive, setLikesActive] = useState(false)

    const commentsScroll = useRef(null)

    const { userData } = useAppSelector(getAuthState)

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await $api.post<ResponseCommentsData>(
                    `${API_URL}/post/getCommentsForPost`,
                    {
                        postId: post._id,
                    }
                )

                setComments(response.data.comments)
            } catch (e: unknown) {
                console.log(e)
            }
        }

        fetchComments()

        const isLiked = async () => {
            try {
                const response = await $api.post<ResponseIsLikedData>(`${API_URL}/post/isLiked`, {
                    author: userData.userId,
                    postId: post._id,
                })

                setLikesActive(response.data.liked)
            } catch (e: unknown) {
                console.log(e)
            }
        }

        isLiked()
    }, [])

    const onClickToggleLike = async () => {
        const response = await $api.post(`${API_URL}/post/toggleLike`, {
            author: userData.userId,
            postId: post._id,
        })

        setLikes(response.data.likes)
        setLikesActive((prev) => !prev)
    }

    const onClickToggleComment = () => {
        setShowCommentInput((prev) => !prev)
    }

    const onClickWriteComment = async () => {
        try {
            const response = await $api.post<ResponseCommentsData>(
                `${API_URL}/post/createComment`,
                {
                    author: userData.userId,
                    body: commentText,
                    postId: post._id,
                }
            )
            setComments(response.data.comments)
        } catch (e: unknown) {
            console.log(e)
        }

        setCommentText('')
    }

    useEffect(() => {
        commentsScroll.current.scrollTop = commentsScroll.current.scrollHeight
    }, [comments])

    return (
        <ContentContainer className={cls.container}>
            {dayjs(post.date).locale('ru').toNow(true) + ' назад'}
            <div className={cls.contentContainer}>
                <div dangerouslySetInnerHTML={nl2br(post.text || '')} />
                {post.imagePath && (
                    <img className={cls.image} src={SERVER_URL + post.imagePath} alt="image" />
                )}
            </div>

            <div
                className={classNames(
                    cls.btnContainer,
                    { [cls.commentCollapsed]: showCommentInput },
                    []
                )}
            >
                <div className={cls.likesValue}>{post.comments.length}</div>
                <CommentBtn className={cls.commentBtn} onClick={onClickToggleComment} />
                <div className={cls.likesValue}>{likes}</div>
                <Heart
                    className={classNames(cls.heart, { [cls.liked]: likesActive })}
                    onClick={onClickToggleLike}
                />
            </div>
            <div className={classNames(cls.commentBlock, { [cls.show]: showCommentInput }, [])}>
                <div className={cls.commentsContainer} ref={commentsScroll}>
                    {comments?.map((comment) => <Comment comment={comment} key={comment._id} />)}
                </div>
                <div className={cls.inputBlock}>
                    <Input
                        placeholder="Напиcать комментарий..."
                        className={cls.inputMessage}
                        value={commentText}
                        onChange={setCommentText}
                    />
                    <Plane className={cls.plane} onClick={onClickWriteComment} />
                </div>
            </div>
        </ContentContainer>
    )
}

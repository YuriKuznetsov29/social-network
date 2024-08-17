import classNames from 'classnames'
import { Comment } from '@/entities/Comment'
import { Input } from '@/shared/ui/Input/Input'
import { memo, useEffect, useRef, useState } from 'react'
import { IComment } from '@/features/PostHandler/model/types/comment'
import Plane from '@/shared/assets/icons/paper-plane-right-bold.svg'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { IPost } from '@/features/PostHandler'
import { useTranslation } from 'react-i18next'
import Heart from '@/shared/assets/icons/iconmonstr-favorite-5.svg'
import CommentBtn from '@/shared/assets/icons/chat-bold.svg'
import cls from './PostFooter.module.scss'
import $api, { API_URL } from '@/shared/api/http'

interface PostFooterProps {
    className?: string
    post: IPost
}

interface ResponseIsLikedData {
    liked: boolean
}

interface ResponseCommentsData {
    comments: IComment[]
}

export const PostFooter = memo(({ post, className }: PostFooterProps) => {
    const [commentText, setCommentText] = useState('')
    const [showCommentInput, setShowCommentInput] = useState(false)
    const [comments, setComments] = useState<IComment[] | null>(null)
    const [likes, setLikes] = useState(post.likes)
    const [likesActive, setLikesActive] = useState(false)
    const commentsScroll = useRef<HTMLDivElement>(null)
    const userData = useAppSelector(getUserData)
    const { t } = useTranslation('pages')

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

    useEffect(() => {
        if (commentsScroll.current) {
            commentsScroll.current.scrollTop = commentsScroll.current.scrollHeight
        }
    }, [comments])

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

    return (
        <>
            <div
                className={classNames(
                    cls.btnContainer,
                    { [cls.commentCollapsed]: showCommentInput },
                    []
                )}
            >
                <div className={cls.likeWrapper}>
                    <div className={cls.likesValue}>{post.comments.length}</div>
                    <CommentBtn
                        data-testid="comment-btn"
                        className={cls.commentBtn}
                        onClick={onClickToggleComment}
                    />
                    <div className={cls.likesValue}>{likes}</div>
                    <Heart
                        className={classNames(cls.heart, { [cls.liked]: likesActive })}
                        onClick={onClickToggleLike}
                    />
                </div>
            </div>
            <div className={classNames(cls.commentBlock, { [cls.show]: showCommentInput }, [])}>
                <div className={cls.commentsContainer} ref={commentsScroll}>
                    {comments?.map((comment) => <Comment comment={comment} key={comment._id} />)}
                </div>
                <div className={cls.inputBlock}>
                    <Input
                        placeholder={t('Напиcать комментарий...')}
                        className={cls.inputMessage}
                        value={commentText}
                        onChange={setCommentText}
                        data-testId="comment-input"
                    />
                    <Plane
                        data-testId="send-comment-btn"
                        className={cls.plane}
                        onClick={onClickWriteComment}
                    />
                </div>
            </div>
        </>
    )
})

import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { IPost } from 'features/PostHandler/model/types/post'
import $api, { API_URL, SERVER_URL } from '../../../shared/api/http/index'
import { Input } from 'shared/ui/Input/Input'
import Plane from 'shared/assets/icons/paper-plane-right-bold.svg'
import { useEffect, useRef, useState } from 'react'
import { Comment } from 'entities/Comment'
import { IComment } from 'features/PostHandler/model/types/comment'
import Heart from 'shared/assets/icons/iconmonstr-favorite-5.svg'
import CommentBtn from 'shared/assets/icons/chat-bold.svg'
import dayjs from 'dayjs'
import { IUser } from 'entities/UserData/model/types/IUser'
import { Avatar } from 'entities/Avatar'
import { transformText } from '../model/services/transformText'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { getPostLoadingStatus } from 'features/PostHandler'
import cls from './Post.module.scss'
import { useTranslation } from 'react-i18next'

interface PostProps {
    className?: string
    post: IPost
}

interface ResponseUserData {
    user: IUser
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
    const [author, setAuthor] = useState<IUser | null>(null)

    const commentsScroll = useRef<HTMLDivElement>(null)

    const userData = useAppSelector(getUserData)
    const { t, i18n } = useTranslation('pages')

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await $api.get<ResponseUserData>(`${API_URL}/user/${post.author}`)
                setAuthor(response.data.user)
            } catch (e) {
                console.log(e)
            }
        }

        getUserData()
    }, [])

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
        if (commentsScroll.current) {
            commentsScroll.current.scrollTop = commentsScroll.current.scrollHeight
        }
    }, [comments])

    return (
        <>
            <ContentContainer className={cls.container}>
                <div className={cls.authorContainer}>
                    <Avatar avatarPath={author?.avatarPath} className={cls.avatar} size="M" />
                    <div>
                        <div>
                            {author?.firstName} {author?.lastName}
                        </div>
                        <div className={cls.time}>
                            {dayjs(post.date).locale(i18n.language).toNow(true) + t(' назад')}
                        </div>
                    </div>
                </div>
                <div className={cls.contentContainer}>
                    <div
                        className={cls.text}
                        dangerouslySetInnerHTML={transformText(post.text || '')}
                    />
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
                        {comments?.map((comment) => (
                            <Comment comment={comment} key={comment._id} />
                        ))}
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
        </>
    )
}

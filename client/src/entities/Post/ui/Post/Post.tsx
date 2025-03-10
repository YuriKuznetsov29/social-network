import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { IPost } from '@/features/PostHandler/model/types/post'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { transformText } from '../../model/services/transformText/transformText'
import { useTranslation } from 'react-i18next'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { ImageModal } from '@/shared/ui/ImageModal/ImageModal'
import { PostOptionsBtn } from '../PostOptionsBtn/PostOptionsBtn'
import cls from './Post.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Post as PostDeprecated } from '../deprecated/Post/Post'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    IconButtonProps,
    Popover,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import $api, { API_URL, SERVER_URL } from '@/shared/api/http'
import { red } from '@mui/material/colors'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { IComment } from '@/features/PostHandler/model/types/comment'
import { PostFooter } from '../PostFooter/PostFooter'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

interface PostProps {
    post: IPost
}

interface ResponseIsLikedData {
    liked: boolean
}

interface ResponseCommentsData {
    comments: IComment[]
}

export const Post = memo(({ post }: PostProps) => {
    const [author, setAuthor] = useState<IUser | null>(null)
    const [isOpenImage, setIsOpenImage] = useState(false)

    const { t, i18n } = useTranslation('pages')

    const onCloseModal = useCallback(() => {
        setIsOpenImage(false)
    }, [])

    const onShowModal = () => {
        setIsOpenImage(true)
    }

    useEffect(() => {
        getUserDataById(post.author)
            .then((companion) => {
                if (companion) setAuthor(companion)
            })
            .catch(console.log)
    }, [])

    const [commentText, setCommentText] = useState('')
    const [showCommentInput, setShowCommentInput] = useState(false)
    const [comments, setComments] = useState<IComment[] | null>(null)
    const [likes, setLikes] = useState(post.likes)
    const [likesActive, setLikesActive] = useState(false)
    const commentsScroll = useRef<HTMLDivElement>(null)
    const userData = useAppSelector(getUserData)

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

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card sx={{ maxWidth: '100%' }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                src={SERVER_URL + author?.avatarPath}
                                sx={{ bgcolor: red[500] }}
                                alt={author?.firstName}
                            />
                        }
                        action={<PostOptionsBtn author={post.author} postId={post._id} />}
                        title={`${author?.firstName} ${author?.lastName}`}
                        subheader={dayjs(post.date).locale(i18n.language).toNow(true) + t(' назад')}
                    />
                    {post.imagePath && (
                        <CardMedia
                            component="img"
                            width="100%"
                            image={SERVER_URL + post.imagePath}
                        />
                    )}
                    <CardContent>
                        <Typography
                            dangerouslySetInnerHTML={transformText(post.text || '')}
                        />
                    </CardContent>
                    <PostFooter post={post} />
                </Card>
            }
            off={<PostDeprecated post={post} />}
        />
    )
})

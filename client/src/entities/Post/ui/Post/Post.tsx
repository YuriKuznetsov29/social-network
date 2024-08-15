import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { IPost } from '@/features/PostHandler/model/types/post'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { transformText } from '../../model/services/transformText/transformText'
import { useTranslation } from 'react-i18next'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { ImageModal } from '@/shared/ui/ImageModal/ImageModal'
import { PostFooter } from '../PostFooter/PostFooter'
import { PostOptionsBtn } from '../PostOptionsBtn/PostOptionsBtn'
import cls from './Post.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Post as PostDeprecated } from './deprecated/Post'
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
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import $api, { API_URL, SERVER_URL } from '@/shared/api/http'
import { red } from '@mui/material/colors'
import CommentIcon from '@mui/icons-material/Comment'
import SendIcon from '@mui/icons-material/Send'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { IComment } from '@/features/PostHandler/model/types/comment'

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
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

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
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
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
                            // variant="body2"
                            // color="text.secondary"
                            dangerouslySetInnerHTML={transformText(post.text || '')}
                        />
                    </CardContent>
                    <CardActions
                        sx={{
                            justifyContent: 'flex-end',
                        }}
                    >
                        {/* <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <IconButton onClick={handleExpandClick}>
                            <CommentIcon />
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ fill: red[500] }} />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent
                            sx={{
                                maxHeight: '200px',
                                overflowY: 'auto',
                            }}
                        >
                            {comments?.map((comment) => {
                                return (
                                    <Stack>
                                        <Box>
                                            <Avatar
                                                src={SERVER_URL + author?.avatarPath}
                                                sx={{ bgcolor: red[500] }}
                                                alt={author?.firstName}
                                            />
                                        </Box>
                                        <Typography paragraph>{comment.body}</Typography>
                                    </Stack>
                                )
                            })}
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and
                                set aside for 10 minutes.
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    fullWidth
                                    placeholder={t('Напиcать комментарий...')}
                                    variant="standard"
                                />
                                <IconButton aria-label="add to favorites">
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Collapse>
                </Card>
            }
            off={<PostDeprecated post={post} />}
        />
    )
})

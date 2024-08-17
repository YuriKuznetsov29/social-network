import classNames from 'classnames'
import { Comment } from '@/entities/Comment'
import { Input } from '@/shared/ui/Input/Input'
import { memo, useEffect, useRef, useState } from 'react'
import { IComment } from '@/features/PostHandler/model/types/comment'
import Plane from '@/shared/assets/icons/paper-plane-right-bold.svg'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import $api, { API_URL, SERVER_URL } from '../../../../shared/api/http/index'
import { IPost } from '@/features/PostHandler'
import { useTranslation } from 'react-i18next'
import Heart from '@/shared/assets/icons/iconmonstr-favorite-5.svg'
import CommentBtn from '@/shared/assets/icons/chat-bold.svg'
import cls from './PostFooter.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { PostFooter as PostFooterDeprecated } from '../deprecated/PostFooter/PostFooter'
import {
    Avatar,
    Box,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
    IconButtonProps,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import SendIcon from '@mui/icons-material/Send'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { red } from '@mui/material/colors'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

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
    const [expanded, setExpanded] = useState(false)
    const commentsScroll = useRef<HTMLDivElement>(null)
    const userData = useAppSelector(getUserData)
    const { t } = useTranslation('pages')

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <CardActions
                        sx={{
                            justifyContent: 'flex-end',
                        }}
                    >
                        {/* <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <Typography>{post.comments.length}</Typography>
                        <IconButton onClick={handleExpandClick}>
                            <CommentIcon />
                        </IconButton>
                        <Typography>{likes}</Typography>
                        <IconButton aria-label="add to favorites" onClick={onClickToggleLike}>
                            <FavoriteIcon sx={{ fill: likesActive ? red[500] : null }} />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent
                            sx={{
                                maxHeight: '200px',
                                overflowY: 'auto',
                            }}
                        >
                            <Stack spacing={3}>
                                {comments?.map((comment) => {
                                    return <Comment comment={comment} />
                                })}
                            </Stack>
                        </CardContent>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    fullWidth
                                    placeholder={t('Напиcать комментарий...')}
                                    variant="standard"
                                    multiline
                                    maxRows={4}
                                />
                                <IconButton onClick={onClickWriteComment}>
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Collapse>
                </>
            }
            off={<PostFooterDeprecated post={post} />}
        />
    )
})

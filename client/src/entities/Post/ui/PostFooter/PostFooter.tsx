import { Comment } from '@/entities/Comment'
import { getUserData } from '@/entities/UserData'
import { IPost } from '@/features/PostHandler'
import { IComment } from '@/features/PostHandler/model/types/comment'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import CommentIcon from '@mui/icons-material/Comment'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SendIcon from '@mui/icons-material/Send'
import {
    Box,
    CardActions,
    CardContent,
    Collapse,
    Divider,
    IconButton,
    IconButtonProps,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { memo, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostFooter as PostFooterDeprecated } from '../deprecated/PostFooter/PostFooter'

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
        if (commentText.trim()) {
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
                        <Typography>{post.comments.length}</Typography>
                        <IconButton onClick={handleExpandClick}>
                            <CommentIcon />
                        </IconButton>
                        <Typography>{likes}</Typography>
                        <IconButton aria-label="add to favorites" onClick={onClickToggleLike}>
                            <FavoriteIcon sx={{ fill: likesActive ? red[500] : null }} />
                        </IconButton>
                    </CardActions>
                    {expanded && <Divider />}
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent
                            sx={{
                                maxHeight: '200px',
                                overflowY: 'auto',
                            }}
                        >
                            <Stack spacing={3}>
                                {comments?.map((comment, i) => {
                                    return <Comment key={comment._id} comment={comment} />
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
                                    onChange={(e) => setCommentText(e.target.value)}
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

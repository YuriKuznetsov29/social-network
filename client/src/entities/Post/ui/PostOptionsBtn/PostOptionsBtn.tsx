import { useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useTranslation } from 'react-i18next'
import { removePost } from '@/features/PostHandler'
import { WhoLikesIt } from '@/entities/WhoLikesIt/ui/WhoLikesIt'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { PostOptionsBtn as PostOptionsBtnDeprecated } from '../deprecated//PostOptionBtn/PostOptionsBtn'
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Popover,
    Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface PostOptionsBtnProps {
    className?: string
    postId: string
    author: string
}

export const PostOptionsBtn = ({ className, postId, author }: PostOptionsBtnProps) => {
    const [show, setShow] = useState(false)
    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()
    const userData = useAppSelector(getUserData)
    const [isOpenWhoLikes, setIsOpenWhoLikes] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const onCloseModal = useCallback(() => {
        setIsOpenWhoLikes(false)
    }, [])

    const onShowModal = () => {
        setIsOpenWhoLikes(true)
    }

    const onClickToggleSetting = (e: React.MouseEvent) => {
        if (!(e.target as HTMLElement).closest('#container')) {
            setShow((prev) => !prev)
        }
    }

    useEffect(() => {
        const closeSearch = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('#optionBtn')) {
                setShow(false)
            }
        }

        document.body.addEventListener<'click'>('click', closeSearch)

        return () => {
            document.body.removeEventListener<'click'>('click', closeSearch)
        }
    }, [])

    const onClickRemovePost = () => {
        dispatch(removePost({ postId }))
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <List>
                            <ListItem disablePadding onClick={onShowModal}>
                                <ListItemButton>
                                    <ListItemText primary={t('Кому нравится')} />
                                </ListItemButton>
                            </ListItem>
                            {userData?.userId === author && (
                                <ListItem disablePadding onClick={onClickRemovePost}>
                                    <ListItemButton>
                                        <ListItemText primary={t('Удалить пост')} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </List>
                    </Popover>
                    <WhoLikesIt isOpen={isOpenWhoLikes} onClose={onCloseModal} postId={postId} />
                </>
            }
            off={<PostOptionsBtnDeprecated postId={postId} author={author} />}
        />
    )
}

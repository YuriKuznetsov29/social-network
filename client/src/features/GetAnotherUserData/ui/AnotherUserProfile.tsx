import { Avatar } from '@/entities/Avatar'
import { PostsList } from '@/entities/Post'
import { getUserData } from '@/entities/UserData'
import { Conversations } from '@/features/AuthByEmail/model/types/response/Conversations'
import { addFriend, removeFriend } from '@/features/GetFriendsData'
import { addConversation } from '@/features/Messenger'
import { fetchUserPosts } from '@/features/PostHandler'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { AnotherUserLoader } from '@/shared/ui/AnotherUserLoader'
import CakeIcon from '@mui/icons-material/Cake'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { getAnotherUserInit } from '../model/selectors/getAnotherUserInit'
import { getAnotherUserState } from '../model/selectors/getAnotherUserState'
import { getAnotherUserData } from '../model/services/getAnotherUserData'
import { AnotherUserProfile as AnotherUserProfileDeprecated } from './deprecated/AnotherUserProfile'

interface AnotherUserProfileProps {
    className?: string
}

export const AnotherUserProfile = ({ className }: AnotherUserProfileProps) => {
    const { userData, error } = useAppSelector(getAnotherUserState)
    const currentUserData = useAppSelector(getUserData)
    const { t, i18n } = useTranslation('pages')
    const { userId, friends } = useAppSelector(getUserData)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { anotherUserId } = useParams()
    const anotherUserInit = useAppSelector(getAnotherUserInit)

    useEffect(() => {
        if (error) {
            navigate('*', { replace: true })
        }
    }, [error])

    useEffect(() => {
        if (userId === anotherUserId) {
            navigate('/profile', { replace: true })
        }
    }, [userId])

    useEffect(() => {
        if (anotherUserId) {
            dispatch(getAnotherUserData({ userId: anotherUserId }))
            dispatch(fetchUserPosts({ author: anotherUserId }))
        }
    }, [anotherUserId])

    const onClickAddFriend = () => {
        if (anotherUserId) {
            dispatch(
                addFriend({
                    friendId: anotherUserId,
                    userId,
                    friendFirstName: userData.firstName,
                    friendLastName: userData.lastName,
                    t,
                })
            )
        }
    }

    const onClickRemoveFriend = () => {
        if (anotherUserId) {
            dispatch(
                removeFriend({
                    friendId: anotherUserId,
                    userId,
                    friendFirstName: userData.firstName,
                    friendLastName: userData.lastName,
                    t,
                })
            )
        }
    }

    const isFriend = () => {
        if (anotherUserId && friends) {
            return friends.includes(anotherUserId)
        }
    }

    const isConversationCreated = () => {
        return currentUserData.conversations?.find(
            (conversation: Conversations) => conversation.friendId === anotherUserId
        )
    }

    const createConversation = () => {
        const conversation = isConversationCreated()
        if (conversation) {
            navigate(`/messenger/${conversation.roomId}`)
        } else if (anotherUserId) {
            const roomId = nanoid()

            dispatch(
                addConversation({
                    roomId,
                    friendId: anotherUserId,
                    userId,
                    navigate,
                })
            )
        }
    }

    if (!anotherUserInit) return <AnotherUserLoader />

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Paper
                        sx={{
                            padding: '16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                        elevation={1}
                    >
                        <Stack alignItems={'flex-start'} spacing={2}>
                            <Avatar
                                size="160px"
                                firstName={userData.firstName}
                                avatarPath={userData.avatarPath}
                                isOnline={userData.isOnline}
                            />
                            <Typography variant="h5" component="h1">
                                {`${userData.firstName} ${userData.lastName}`}
                            </Typography>
                        </Stack>
                        <Stack>
                            {!userData.isOnline && (
                                <Typography align="center" variant="body1" component="div">
                                    {`Был(а) в сети ${
                                        dayjs(userData.lastSeenOnline)
                                            .locale(i18n.language)
                                            .toNow(true) + t(' назад')
                                    }`}
                                </Typography>
                            )}

                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CakeIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={`${t('День рождения')} ${dayjs(
                                            userData.birthDay.split('.').reverse().join('-')
                                        )
                                            .locale(i18n.language)
                                            .format('D MMMM YYYY')}`}
                                        // secondary={t('День рождения')}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`${t('Город')} ${userData.city}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChatBubbleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={`${t('Друзья')} ${userData.friends?.length}`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`${t('Посты')} ${userData.posts}`} />
                                </ListItem>
                            </List>
                            <Stack spacing={2}>
                                {isFriend() ? (
                                    <Button variant="outlined" onClick={onClickRemoveFriend}>
                                        {t('Удалить из друзей')}
                                    </Button>
                                ) : (
                                    <Button variant="outlined" onClick={onClickAddFriend}>
                                        {t('Добавить в друзья')}
                                    </Button>
                                )}
                                <Button onClick={createConversation} variant="outlined">
                                    {t('Написать сообщение')}
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>
                    <PostsList />
                </>
            }
            off={<AnotherUserProfileDeprecated />}
        />
    )
}

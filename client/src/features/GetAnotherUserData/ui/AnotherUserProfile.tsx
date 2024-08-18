import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { getAnotherUserState } from '../model/selectors/getAnotherUserState'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUserPosts } from '@/features/PostHandler'
import { useEffect } from 'react'
import { getAnotherUserData } from '../model/services/getAnotherUserData'
import { nanoid } from 'nanoid'
import { Avatar } from '@/entities/Avatar'
import { Conversations } from '@/features/AuthByEmail/model/types/response/Conversations'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { addFriend, removeFriend } from '@/features/GetFriendsData'
import { addConversation } from '@/features/Messenger'
import { useTranslation } from 'react-i18next'
import { getAnotherUserInit } from '../model/selectors/getAnotherUserInit'
import { AnotherUserLoader } from '@/shared/ui/AnotherUserLoader'
import BirthIcon from '@/shared/assets/icons/gift-bold.svg'
import HomeIcon from '@/shared/assets/icons/house-bold.svg'
import FriendsIcon from '@/shared/assets/icons/users-bold.svg'
import PostIcon from '@/shared/assets/icons/note-pencil-bold.svg'
import { PostsList } from '@/entities/Post'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { AnotherUserProfile as AnotherUserProfileDeprecated } from './deprecated/AnotherUserProfile'
import {
    Badge,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import CakeIcon from '@mui/icons-material/Cake'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import EmailIcon from '@mui/icons-material/Email'
import { styled } from '@mui/material/styles'
import { SERVER_URL } from '@/shared/api/http'
import dayjs from 'dayjs'

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

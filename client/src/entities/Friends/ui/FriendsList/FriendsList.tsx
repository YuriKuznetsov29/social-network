import { Avatar } from '@/entities/Avatar'
import { IUser, getUserData } from '@/entities/UserData'
import { Conversations } from '@/features/AuthByEmail/model/types/response/Conversations'
import {
    addFriend,
    getAllFriends,
    getFriendsData,
    getFriendsLoadingStatus,
    removeFriend,
} from '@/features/GetFriendsData'
import { addConversation } from '@/features/Messenger'
import BirthIcon from '@/shared/assets/icons/gift-bold.svg'
import HomeIcon from '@/shared/assets/icons/house-bold.svg'
import PostIcon from '@/shared/assets/icons/note-pencil-bold.svg'
import FriendsIcon from '@/shared/assets/icons/users-bold.svg'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
// import { Avatar } from '@/entities/Avatar'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { FriendsPageLoader } from '@/shared/ui/FriendsPageLoader/FriendsPageLoader'
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
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import cls from './FriendsList.module.scss'

interface FriendsListProps {
    className?: string
}

export const FriendsList = ({ className }: FriendsListProps) => {
    const { userId, conversations } = useAppSelector(getUserData)
    const friends = useAppSelector(getFriendsData)
    const isLoading = useAppSelector(getFriendsLoadingStatus)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('pages')

    const [time, setTime] = useState(Date.now() + '')

    useEffect(() => {
        if (userId) dispatch(getAllFriends(userId))
    }, [userId])

    const onClickRemoveFriend = (
        friendId: string,
        friendFirstName: string,
        friendLastName: string
    ) => {
        dispatch(removeFriend({ friendId, userId, friendFirstName, friendLastName }))
    }

    const onClickAddFriend = (friendId: string, firstName: string, lastName: string) => {
        dispatch(
            addFriend({
                friendId: friendId,
                userId,
                friendFirstName: firstName,
                friendLastName: lastName,
                t,
            })
        )
    }

    const isConversationCreated = (anotherUserId: string) => {
        return conversations?.find(
            (conversation: Conversations) => conversation.friendId === anotherUserId
        )
    }

    const createConversation = (friendId: string) => {
        const conversation = isConversationCreated(friendId)
        if (conversation) {
            navigate(`/messenger/${conversation.roomId}`)
        } else {
            const roomId = nanoid()

            dispatch(
                addConversation({
                    roomId,
                    friendId,
                    userId,
                    navigate,
                })
            )
        }
    }

    if (isLoading) {
        return <FriendsPageLoader />
    }

    const isFriend = (friendId: string) => {
        return userId !== friendId
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    {friends.length ? (
                        friends.map((friend) => {
                            return (
                                <>
                                    <Paper
                                        key={friend.userId}
                                        sx={{
                                            padding: '16px',
                                            display: 'flex',
                                            justifyContent: { xs: 'center', sm: 'space-between' },
                                            alignItems: { xs: 'center', sm: 'flex-start' },
                                            flexDirection: { xs: 'column', sm: 'row' },
                                        }}
                                        elevation={1}
                                    >
                                        <Stack
                                            alignItems={{ xs: 'center', sm: 'flex-start' }}
                                            spacing={2}
                                            style={{ maxWidth: '50%' }}
                                        >
                                            <Avatar
                                                size={{ xs: '140px', sm: '160px' }}
                                                firstName={friend.firstName}
                                                avatarPath={friend.avatarPath}
                                                isOnline={friend.isOnline}
                                            />
                                            <Typography
                                                variant="h5"
                                                component="h1"
                                                textAlign="center"
                                            >
                                                {`${friend.firstName} ${friend.lastName}`}
                                            </Typography>
                                        </Stack>
                                        <Stack>
                                            {!friend.isOnline && (
                                                <Typography
                                                    align="center"
                                                    variant="body1"
                                                    component="div"
                                                >
                                                    {`Был(а) в сети ${
                                                        dayjs(friend.lastSeenOnline)
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
                                                            friend.birthDay
                                                                .split('.')
                                                                .reverse()
                                                                .join('-')
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
                                                    <ListItemText
                                                        primary={`${t('Город')} ${friend.city}`}
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ChatBubbleIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={`${t('Друзья')} ${friend.friends
                                                            ?.length}`}
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <EmailIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={`${t('Посты')} ${friend.posts}`}
                                                    />
                                                </ListItem>
                                            </List>
                                            <Stack spacing={2}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        onClickRemoveFriend(
                                                            friend.userId,
                                                            friend.firstName,
                                                            friend.lastName
                                                        )
                                                    }
                                                >
                                                    {t('Удалить из друзей')}
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        createConversation(friend.userId)
                                                    }
                                                    variant="outlined"
                                                >
                                                    {t('Написать сообщение')}
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                </>
                            )
                        })
                    ) : (
                        <Paper
                            sx={{
                                padding: '16px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                            elevation={1}
                        >
                            <Typography>{t('У вас еще нет друзей')}</Typography>
                        </Paper>
                    )}
                </>
            }
            off={
                <>
                    {friends.length ? (
                        <div data-testid="friends" className={cls.listContainer}>
                            {friends.map((friend: IUser) => (
                                <ContentContainer
                                    className={cls.contentWrapper}
                                    key={friend.userId}
                                >
                                    <div className={cls.dataWrapper}>
                                        <Avatar
                                            avatarPath={friend.avatarPath}
                                            size="XL"
                                            isOnline={friend.isOnline}
                                            lastSeenOnline={friend.lastSeenOnline}
                                            className={cls.avatar}
                                        />
                                        <h2 className={cls.name}>
                                            <div>{friend.firstName}</div>
                                            <div>{friend.lastName}</div>
                                        </h2>
                                    </div>

                                    <div className={cls.valueWrapper}>
                                        <div className={cls.valueContainer}>
                                            <div>
                                                <div className={cls.valueTitle}>
                                                    <BirthIcon className={cls.icon} />
                                                    {t('День рождения')}
                                                </div>
                                                <div className={cls.valueTitle}>
                                                    <HomeIcon className={cls.icon} />
                                                    {t('Город')}
                                                </div>
                                                <div className={cls.valueTitle}>
                                                    <FriendsIcon className={cls.icon} />
                                                    {t('Друзья ')}
                                                </div>
                                                <div className={cls.valueTitle}>
                                                    <PostIcon className={cls.icon} />
                                                    {t('Посты')}
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    {dayjs(
                                                        friend.birthDay
                                                            .split('.')
                                                            .reverse()
                                                            .join('-')
                                                    )
                                                        .locale('ru')
                                                        .format('D MMMM YYYY')}
                                                </div>
                                                <div>{friend.city}</div>
                                                <div>{friend.friends?.length}</div>
                                                <div>5</div>
                                            </div>
                                        </div>

                                        <Button
                                            className={cls.addFriendBtn}
                                            onClick={() =>
                                                onClickRemoveFriend(
                                                    friend.userId,
                                                    friend.firstName,
                                                    friend.lastName
                                                )
                                            }
                                        >
                                            {t('Удалить из друзей')}
                                        </Button>

                                        <Button
                                            className={cls.messageBtn}
                                            onClick={() => createConversation(friend.userId)}
                                        >
                                            {t('Написать сообщение')}
                                        </Button>
                                    </div>
                                </ContentContainer>
                            ))}
                            {/* <Input value={time} onChange={setTime} />
                    <div>{new Date(+time).toDateString()}</div>
                    <button onClick={up}>+</button>
                    <button onClick={down}>-</button>
                    {dayjs(new Date(+time))
                        .locale(i18n.language + '-short')
                        .toNow(true)} */}
                        </div>
                    ) : (
                        <div data-testid="friends-page">{t('У вас еще нет друзей')}</div>
                    )}
                </>
            }
        />

        // <>
        //     {friends.length ? (
        //         <div data-testid="friends" className={cls.listContainer}>
        //             {friends.map((friend: IUser) => (
        //                 <ContentContainer className={cls.contentWrapper} key={friend.userId}>
        //                     <div className={cls.dataWrapper}>
        //                         <Avatar
        //                             avatarPath={friend.avatarPath}
        //                             size="XL"
        //                             isOnline={friend.isOnline}
        //                             lastSeenOnline={friend.lastSeenOnline}
        //                             className={cls.avatar}
        //                         />
        //                         <h2 className={cls.name}>
        //                             <div>{friend.firstName}</div>
        //                             <div>{friend.lastName}</div>
        //                         </h2>
        //                     </div>

        //                     <div className={cls.valueWrapper}>
        //                         <div className={cls.valueContainer}>
        //                             <div>
        //                                 <div className={cls.valueTitle}>
        //                                     <BirthIcon className={cls.icon} />
        //                                     {t('День рождения')}
        //                                 </div>
        //                                 <div className={cls.valueTitle}>
        //                                     <HomeIcon className={cls.icon} />
        //                                     {t('Город')}
        //                                 </div>
        //                                 <div className={cls.valueTitle}>
        //                                     <FriendsIcon className={cls.icon} />
        //                                     {t('Друзья ')}
        //                                 </div>
        //                                 <div className={cls.valueTitle}>
        //                                     <PostIcon className={cls.icon} />
        //                                     {t('Посты')}
        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <div>
        //                                     {dayjs(friend.birthDay.split('.').reverse().join('-'))
        //                                         .locale('ru')
        //                                         .format('D MMMM YYYY')}
        //                                 </div>
        //                                 <div>{friend.city}</div>
        //                                 <div>{friend.friends?.length}</div>
        //                                 <div>5</div>
        //                             </div>
        //                         </div>

        //                         <Button
        //                             className={cls.addFriendBtn}
        //                             onClick={() =>
        //                                 onClickRemoveFriend(
        //                                     friend.userId,
        //                                     friend.firstName,
        //                                     friend.lastName
        //                                 )
        //                             }
        //                         >
        //                             {t('Удалить из друзей')}
        //                         </Button>

        //                         <Button
        //                             className={cls.messageBtn}
        //                             onClick={() => createConversation(friend.userId)}
        //                         >
        //                             {t('Написать сообщение')}
        //                         </Button>
        //                     </div>
        //                 </ContentContainer>
        //             ))}
        //             {/* <Input value={time} onChange={setTime} />
        //             <div>{new Date(+time).toDateString()}</div>
        //             <button onClick={up}>+</button>
        //             <button onClick={down}>-</button>
        //             {dayjs(new Date(+time))
        //                 .locale(i18n.language + '-short')
        //                 .toNow(true)} */}
        //         </div>
        //     ) : (
        //         <div data-testid="friends-page">{t('У вас еще нет друзей')}</div>
        //     )}
        // </>
    )
}

import { Avatar } from '@/entities/Avatar'
import { getUserData } from '@/entities/UserData'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { removeConversation } from '@/features/Messenger'
import { IMessage } from '@/features/Messenger/model/types/message'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import useChat, { MessageData } from '@/shared/lib/hook/useChat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Popover,
    Stack,
    Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { forwardRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

import { ConversationLink as ConversationLinkDeprecated } from './deprecated/ConversationLink'

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />
})

interface ConversationLinkProps {
    className?: string
    message?: IMessage
    companion: IUser
    conversation: { roomId: string; friendId: string }
}

export const ConversationLink = (props: ConversationLinkProps) => {
    const { className, message, companion, conversation } = props
    const { t, i18n } = useTranslation('pages')
    const [newMessage, setNewMessage] = useState<MessageData | null>(null)
    const [newAuthorLastMessage, setNewAuthorLastMessage] = useState<IUser | null>(null)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const { messages } = useChat(conversation.roomId)

    const userData = useAppSelector(getUserData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const lastMessage = messages[messages.length - 1]

        if (lastMessage && lastMessage.messageId !== message?.messageId) {
            setNewMessage(lastMessage)

            if (lastMessage?.author) {
                getUserDataById(lastMessage.author)
                    .then((author) => {
                        if (author) setNewAuthorLastMessage(author)
                    })
                    .catch(console.log)
            }
        }
    }, [messages])

    const onClickRemoveConversation = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(
            removeConversation({
                companionId: conversation.friendId,
                roomId: conversation.roomId,
                userId: userData.userId,
                t,
            })
        )
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
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
                <Stack
                    sx={{
                        width: '100%',
                        p: '16px',
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                    }}
                    component={Link}
                    to={`/messenger/${conversation.roomId}`}
                >
                    <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                        <Avatar
                            avatarPath={companion?.avatarPath}
                            size="80px"
                            isOnline={companion.isOnline}
                            lastSeenOnline={companion.lastSeenOnline}
                        />
                        {newMessage && newAuthorLastMessage ? (
                            <Box
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Stack
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                        }}
                                    >
                                        <Typography color="text.primary">
                                            {companion?.firstName} {companion?.lastName}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                            }}
                                        >
                                            <Typography color="text.secondary">
                                                {dayjs(newMessage.createdAt)
                                                    .locale('ru')
                                                    .toNow(true) + ' назад'}
                                            </Typography>
                                            <IconButton
                                                aria-label="settings"
                                                onClick={(e) => handleClick(e)}
                                            >
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
                                                    <ListItem
                                                        disablePadding
                                                        onClick={(e) =>
                                                            onClickRemoveConversation(e)
                                                        }
                                                    >
                                                        <ListItemButton>
                                                            <ListItemText
                                                                primary={t('Удалить диалог')}
                                                            />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </List>
                                            </Popover>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            gap: 2,
                                        }}
                                    >
                                        <Avatar avatarPath={newAuthorLastMessage?.avatarPath} />
                                        <Typography color="text.secondary">
                                            {newMessage.textOrPathToFile &&
                                            newMessage.textOrPathToFile?.length > 30
                                                ? newMessage.textOrPathToFile.slice(0, 30) + '...'
                                                : newMessage.textOrPathToFile}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Stack
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                        }}
                                    >
                                        <Typography color="text.primary">
                                            {companion?.firstName} {companion?.lastName}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                            }}
                                        >
                                            <Typography color="text.secondary">
                                                {dayjs(message?.createdAt)
                                                    .locale('ru')
                                                    .toNow(true) + ' назад'}
                                            </Typography>
                                            <IconButton
                                                aria-label="settings"
                                                onClick={(e) => handleClick(e)}
                                            >
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
                                                    <ListItem
                                                        disablePadding
                                                        onClick={(e) =>
                                                            onClickRemoveConversation(e)
                                                        }
                                                    >
                                                        <ListItemButton>
                                                            <ListItemText
                                                                primary={t('Удалить диалог')}
                                                            />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </List>
                                            </Popover>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            gap: 2,
                                        }}
                                    >
                                        <Avatar avatarPath={message?.user[0]?.avatarPath} />
                                        <Typography color="text.secondary">
                                            {message?.textOrPathToFile &&
                                            message?.textOrPathToFile?.length > 30
                                                ? message?.textOrPathToFile.slice(0, 30) + '...'
                                                : message?.textOrPathToFile}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        )}
                    </Box>
                </Stack>
            }
            off={
                <ConversationLinkDeprecated
                    companion={companion}
                    conversation={conversation}
                    message={message}
                />
            }
        />
    )
}

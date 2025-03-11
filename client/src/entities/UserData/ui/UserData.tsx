import dayjs from 'dayjs'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '../model/selectors/getUserData'
import { UserDataLoader } from '@/shared/ui/UserDataLoader'
import { getUserInitied } from '../model/selectors/getUserInited'
import { useTranslation } from 'react-i18next'
import { getUserDataLoading } from '../model/selectors/getUserDataLoading'
import cls from './UserData.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { UserData as UserDataDeprecated } from './deprecated/UserData'
import {
    Paper,
    Avatar,
    Stack,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Badge,
} from '@mui/material'
import { SERVER_URL } from '@/shared/api/http'
import CakeIcon from '@mui/icons-material/Cake'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import EmailIcon from '@mui/icons-material/Email'
import { styled } from '@mui/material/styles'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))

interface UserDataProps {
    className?: string
}

export const UserData = ({ className }: UserDataProps) => {
    const userData = useAppSelector(getUserData)
    const userInit = useAppSelector(getUserInitied)
    const loading = useAppSelector(getUserDataLoading)
    const { t, i18n } = useTranslation('pages')

    if (loading) return <UserDataLoader />

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Paper
                    sx={{
                        padding: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    elevation={1}
                >
                    <Stack alignItems={'flex-start'} spacing={2}>
                        <StyledBadge
                            sx={{
                                '& .MuiBadge-badge': {
                                    display: userData.isOnline ? 'block' : 'none',
                                },
                            }}
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar
                                sx={{
                                    width: '120px',
                                    height: '120px',
                                }}
                                alt={userData.firstName}
                                src={SERVER_URL + userData.avatarPath}
                            />
                        </StyledBadge>
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
                    </Stack>
                </Paper>
            }
            off={<UserDataDeprecated />}
        />
    )
}

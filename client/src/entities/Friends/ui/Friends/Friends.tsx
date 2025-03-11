import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    getAllFriends,
    getFriendsLoadingStatus,
    getFriendsState,
    getInitFriendsStatus,
} from '@/features/GetFriendsData'
import { IUser, getUserData } from '@/entities/UserData'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { FriendsLoader } from '@/shared/ui/FriendsLoader'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Friends as FriendsDeprecated } from '../deprecated/Friends/Friends'
import { Badge, Box, IconButton, Paper, Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import { Avatar } from '@/entities/Avatar'
import DeleteIcon from '@mui/icons-material/Delete'

interface FriendsProps {
    className?: string
}

export const Friends = ({ className }: FriendsProps) => {
    const { userId } = useAppSelector(getUserData)
    const { friends } = useAppSelector(getFriendsState)
    const initStatus = useAppSelector(getInitFriendsStatus)
    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userId) {
            dispatch(getAllFriends(userId))
        }
    }, [userId])

    if (!initStatus) return <FriendsLoader />

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Paper
                    sx={{
                        width: '100%',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 2,
                        overflowX: 'auto',
                    }}
                    elevation={1}
                >
                    <Typography variant="h5">{t('Друзья')}</Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            gap: 2,
                        }}
                    >
                        {friends.map((friend) => {
                            return (
                                <Stack key={friend.userId} alignItems="center" spacing={1}>
                                    <Avatar
                                        avatarPath={friend.avatarPath}
                                        isOnline={friend.isOnline}
                                        size="60px"
                                        firstName={friend.firstName}
                                        link
                                        userId={friend.userId}
                                    />
                                    <Typography>{friend.firstName}</Typography>
                                </Stack>
                            )
                        })}
                    </Box>
                </Paper>
            }
            off={<FriendsDeprecated />}
        />
    )
}

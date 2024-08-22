import classNames from 'classnames'
import cls from './WhoLikesIt.module.scss'
import { Modal } from '@/shared/ui/Modal/Modal'
import { getFriendsState } from '@/features/GetFriendsData'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { IUser } from '@/entities/UserData'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@/entities/Avatar'
import { useTranslation } from 'react-i18next'
import { getLikesUsersData } from '../model/selectors/getLikesUsersData'
import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { getWhoLikesUsers } from '../model/services/getWhoLikesUsers'
import { Loader } from '@/shared/ui/Loader'
import { getLikesLoading } from '../model/selectors/getLikesLoading'
import { WhoLikesItLoader } from '@/shared/ui/WhoLikesItLoader/WhoLikesItLoader'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { WhoLikesIt as WhoLikesItDeprecated } from './deprecated/WhoLikesIt'
import { Typography, Modal as MuiModal, Box, Stack } from '@mui/material'

interface WhoLikesItProps {
    isOpen: boolean
    onClose: () => void
    postId: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

    // width: '100%',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2,
    overflowX: 'auto',
}

export const WhoLikesIt = ({ isOpen, onClose, postId }: WhoLikesItProps) => {
    const users = useAppSelector(getLikesUsersData)
    const isLoading = useAppSelector(getLikesLoading)
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('pages')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isOpen) dispatch(getWhoLikesUsers(postId))
    }, [isOpen])

    const onClickShowUser = (userId: string) => {
        navigate(`/${userId}`)
        document.body.style.overflow = 'auto'
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <MuiModal
                    open={isOpen}
                    onClose={onClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {users.length ? (
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: 2,
                                }}
                            >
                                {users.map((user) => {
                                    return (
                                        <Stack key={user.userId} alignItems="center" spacing={1}>
                                            <Avatar
                                                avatarPath={user.avatarPath}
                                                isOnline={user.isOnline}
                                                size="60px"
                                                firstName={user.firstName}
                                                link
                                                userId={user.userId}
                                            />
                                            <Typography>{user.firstName}</Typography>
                                        </Stack>
                                    )
                                })}
                            </Box>
                        ) : (
                            <Typography>{t('Пост еще никому не понравился')}</Typography>
                        )}
                    </Box>
                </MuiModal>
            }
            off={
                <Modal isOpen={isOpen} onClose={onClose} className={cls.background}>
                    <div className={cls.usersWrapper}>
                        {isLoading ? (
                            <WhoLikesItLoader />
                        ) : users.length ? (
                            users.map((friend: IUser) => {
                                return (
                                    <div
                                        className={cls.friend}
                                        key={friend.userId}
                                        onClick={() => onClickShowUser(friend.userId)}
                                    >
                                        <Avatar
                                            avatarPath={friend.avatarPath}
                                            size="M"
                                            isOnline={friend.isOnline}
                                            lastSeenOnline={friend.lastSeenOnline}
                                        />
                                        <div>{friend.firstName}</div>
                                    </div>
                                )
                            })
                        ) : (
                            t('Пост еще никому не понравился')
                        )}
                    </div>
                </Modal>
            }
        />
    )
}

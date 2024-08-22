import classNames from 'classnames'
import { Avatar } from '@/entities/Avatar'
import Arrow from '@/shared/assets/icons/caret-left-bold.svg'
import { forwardRef, memo, useEffect, useState } from 'react'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { useTranslation } from 'react-i18next'
import cls from './DialogHeader.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { DialogHeader as DialogHeaderDeprecated } from '../deprecated/DialogHeader/DialogHeader'
import { CardHeader, IconButton, Stack, Typography } from '@mui/material'
import { DialogOptionBtn } from '../DialogOptionBtn/DialogOptionBtn'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import dayjs from 'dayjs'
import i18n from '@/shared/config/i18n/i18n'
import { green } from '@mui/material/colors'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />
})

interface DialogHeaderProps {
    className?: string
    roomId: string
}

export const DialogHeader = memo(({ className, roomId }: DialogHeaderProps) => {
    const [companion, setCompanion] = useState<IUser | null>(null)
    const { t } = useTranslation('pages')

    const userData = useAppSelector(getUserData)

    useEffect(() => {
        if (userData.conversations) {
            const friend = userData.conversations.find(
                (conversation) => conversation.roomId === roomId
            )

            if (friend) {
                const { friendId } = friend
                getUserDataById(friendId)
                    .then((companion) => {
                        if (companion) setCompanion(companion)
                    })
                    .catch(console.log)
            }
        }
    }, [userData.conversations])

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Stack direction="row" alignItems="center">
                    <IconButton
                        component={Link}
                        to={'/messenger'}
                        sx={{
                            ml: '8px',
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <CardHeader
                        sx={{
                            width: '100%',
                        }}
                        avatar={
                            <Avatar
                                avatarPath={companion?.avatarPath}
                                firstName={companion?.firstName}
                                isOnline={companion?.isOnline}
                                size="60px"
                            />
                        }
                        action={<DialogOptionBtn />}
                        title={`${companion?.firstName} ${companion?.lastName}`}
                        subheader={
                            companion?.isOnline ? (
                                <Typography color={green[500]}>{t('В сети')}</Typography>
                            ) : (
                                `Был(а) в сети ${
                                    dayjs(companion?.lastSeenOnline)
                                        .locale(i18n.language)
                                        .toNow(true) + t(' назад')
                                }`
                            )
                        }
                    />
                </Stack>
            }
            off={<DialogHeaderDeprecated roomId={roomId} />}
        />
        // <div className={classNames(cls.DialogHeader, {}, [className])}>
        //     <Link to={'/messenger'} className={cls.backButton}>
        //         <Arrow className={cls.icon} /> {t('Назад')}
        //     </Link>
        //     {companion?.firstName} {companion?.lastName}
        //     <Avatar
        //         avatarPath={companion?.avatarPath}
        //         size="M"
        //         isOnline={companion?.isOnline}
        //         click
        //         userId={companion?.userId}
        //     />
        // </div>
    )
})

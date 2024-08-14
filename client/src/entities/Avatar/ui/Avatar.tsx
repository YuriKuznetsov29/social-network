import classNames from 'classnames'
import { SERVER_URL } from '../../../shared/api/http/index'
import User from '@/shared/assets/icons/user.svg'
import Circle from '@/shared/assets/icons/dot-bold.svg'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { ImageModal } from '@/shared/ui/ImageModal/ImageModal'
import { memo, useCallback, useState } from 'react'
import CircleXL from '@/shared/assets/icons/xl-dot.svg'
import cls from './Avatar.module.scss'
import { useNavigate } from 'react-router'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Avatar as AvatarDeprecated } from './deprecated/Avatar'
import { Avatar as MuiAvatar } from '@mui/material'

interface AvatarProps {
    className?: string
    avatarPath?: string
    isOnline?: boolean
    lastSeenOnline?: string
    size?: 'XL' | 'L' | 'M' | 'MS' | 'S'
    click?: boolean
    userId?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, avatarPath, isOnline, lastSeenOnline, size = 'S', click, userId } = props
    const { t, i18n } = useTranslation('pages')
    const [isOpenImage, setIsOpenImage] = useState(false)
    const navigate = useNavigate()

    const onCloseModal = useCallback(() => {
        setIsOpenImage(false)
    }, [])

    const onShowModal = () => {
        setIsOpenImage(true)
    }

    const onClickNavigate = () => {
        if (click && userId && size !== 'XL') {
            navigate(`/${userId}`)
        }
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <MuiAvatar
                    className={classNames(cls.user, {}, [[cls[size]]])}
                    alt="Remy Sharp"
                    src={SERVER_URL + avatarPath}
                />
            }
            off={
                <AvatarDeprecated
                    className={className}
                    avatarPath={avatarPath}
                    isOnline={isOnline}
                    lastSeenOnline={lastSeenOnline}
                    size={size}
                    click={click}
                    userId={userId}
                />
            }
        />
    )
})

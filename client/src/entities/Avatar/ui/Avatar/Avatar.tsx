import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Avatar as MuiAvatar } from '@mui/material'
import { red } from '@mui/material/colors'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import { SERVER_URL } from '@/shared/api/http/index'
import { Avatar as AvatarDeprecated } from '../deprecated/Avatar'
import { StyledBadge } from '../StyledBadge/StyledBadge'
import { stringToColor } from '../../lib/helpers/stringToColor'

interface AvatarProps {
    className?: string
    avatarPath?: string
    isOnline?: boolean
    lastSeenOnline?: string
    size?: 'XL' | 'L' | 'M' | 'MS' | 'S' | string | Record<string, string>
    click?: boolean
    userId?: string
    firstName?: string
    link?: boolean
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        avatarPath,
        isOnline,
        lastSeenOnline,
        size,
        click,
        userId,
        firstName,
        link,
    } = props
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
        if (link && userId) {
            navigate(`/${userId}`)
        }
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StyledBadge
                    data-testid="badge"
                    sx={{
                        cursor: 'pointer',
                        '& .MuiBadge-badge': {
                            display: isOnline ? 'block' : 'none',
                        },
                    }}
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    onClick={onClickNavigate}
                >
                    <MuiAvatar
                        data-testid="avatar"
                        sx={{
                            width: size ? size : '40px',
                            height: size ? size : '40px',
                            backgroundColor: stringToColor(firstName || red[500]),
                        }}
                        alt={firstName}
                        src={SERVER_URL + avatarPath}
                    />
                </StyledBadge>
            }
            off={
                <AvatarDeprecated
                    className={className}
                    avatarPath={avatarPath}
                    isOnline={isOnline}
                    lastSeenOnline={lastSeenOnline}
                    size={size as string}
                    click={click}
                    userId={userId}
                />
            }
        />
    )
})

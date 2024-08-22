import { SERVER_URL } from '../../../shared/api/http/index'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Avatar as AvatarDeprecated } from './deprecated/Avatar'
import { Badge, Avatar as MuiAvatar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors'

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

function stringToColor(string: string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff
        color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
}

interface AvatarProps {
    className?: string
    avatarPath?: string
    isOnline?: boolean
    lastSeenOnline?: string
    size?: 'XL' | 'L' | 'M' | 'MS' | 'S' | string
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
                    size={size}
                    click={click}
                    userId={userId}
                />
            }
        />
    )
})

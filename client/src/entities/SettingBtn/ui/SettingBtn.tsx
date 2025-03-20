import { getUserData } from '@/entities/UserData'
import { signOut } from '@/features/AuthByEmail'
import { SERVER_URL } from '@/shared/api/http'
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/consts/localStorage'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button, Popover, ButtonGroup, Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { SettingBtn as SettingBtnDeprecated } from './deprecated/SettingBtn'

interface SettingBtnProps {
    className?: string
}

export const SettingBtn = ({ className }: SettingBtnProps) => {
    const [show, setShow] = useState(false)
    const userData = useAppSelector(getUserData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation('pages')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const onSignOut = () => {
        dispatch(signOut({ navigate }))
    }

    const onClickToggleSetting = (e: React.MouseEvent) => {
        if (!(e.target as HTMLElement).closest('#container')) {
            setShow((prev) => !prev)
        }
    }

    const onClickNewVersion = () => {
        localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, 'old')
        location.reload()
    }

    useEffect(() => {
        const closeSearch = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('#profileBtn')) {
                setShow(false)
            }
        }

        document.body.addEventListener<'click'>('click', closeSearch)

        return () => {
            document.body.removeEventListener<'click'>('click', closeSearch)
        }
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div>
                    {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                        Open Popover
                    </Button> */}
                    <Avatar
                        sx={{
                            cursor: 'pointer',
                        }}
                        onClick={(e) => handleClick(e)}
                        alt={userData.firstName}
                        src={SERVER_URL + userData.avatarPath}
                    />
                    <Popover
                        id={id}
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
                        <ButtonGroup orientation="vertical" variant="text">
                            <Button
                                startIcon={<EditIcon />}
                                onClick={() => navigate('/changeProfile')}
                            >
                                {t('Редактировать профиль')}
                            </Button>
                            <Button startIcon={<LogoutIcon />} onClick={onSignOut}>
                                {t('Выйти')}
                            </Button>
                            <Button onClick={onClickNewVersion}>{t('Старая версия')}</Button>
                        </ButtonGroup>
                    </Popover>
                </div>
            }
            off={<SettingBtnDeprecated className={className} />}
        />
    )
}

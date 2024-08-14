import classNames from 'classnames'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import ArrowDown from '@/shared/assets/icons/caret-down-bold.svg'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { signOut } from '@/features/AuthByEmail'
import { useEffect, useState } from 'react'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import SignOutIcon from '@/shared/assets/icons/sign-out-bold.svg'
import ProfileIcon from '@/shared/assets/icons/user-circle-bold.svg'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import cls from './SettingBtn.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { SettingBtn as SettingBtnDeprecated } from './deprecated/SettingBtn'
import { Button, Popover, Typography, Link, ButtonGroup, Avatar } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'
import { SERVER_URL } from '@/shared/api/http'

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
                            horizontal: 'center',
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
                        </ButtonGroup>
                    </Popover>
                </div>
            }
            off={<SettingBtnDeprecated className={className} />}
        />
    )
}

import { Avatar } from '@/entities/Avatar'
import { getUserData } from '@/entities/UserData'
import { signOut } from '@/features/AuthByEmail'
import ArrowDown from '@/shared/assets/icons/caret-down-bold.svg'
import SignOutIcon from '@/shared/assets/icons/sign-out-bold.svg'
import ProfileIcon from '@/shared/assets/icons/user-circle-bold.svg'
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/consts/localStorage'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import cls from './SettingBtn.module.scss'

interface SettingBtnProps {
    className?: string
}

export const SettingBtn = ({ className }: SettingBtnProps) => {
    const [show, setShow] = useState(false)
    const userData = useAppSelector(getUserData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation('pages')

    const onClickNewVersion = () => {
        localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, 'new')
        location.reload()
    }

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

    return (
        <div
            data-testid="toggle-btn"
            className={classNames(cls.SettingBtn, {}, [className])}
            onClick={onClickToggleSetting}
            id="profileBtn"
        >
            <div className={cls.btnContainer}>
                <Avatar size="S" avatarPath={userData.avatarPath} className={cls.avatar} />
                <ArrowDown className={cls.icon} />
            </div>

            <div
                data-testid="toggle-elem"
                className={classNames(cls.container, { [cls.active]: show }, [])}
                id="container"
            >
                <Link className={cls.link} to={'/changeProfile'}>
                    <ProfileIcon className={cls.icon_link} />
                    {t('Редактировать профиль')}
                </Link>
                <span className={cls.link} onClick={onSignOut}>
                    <SignOutIcon className={cls.icon_link} />
                    {t('Выйти')}
                </span>
                <span className={cls.link} onClick={onClickNewVersion}>
                    {t('Новая версия')}
                </span>
                <div className={cls.themeContainer}>
                    <LangSwitcher short />
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}

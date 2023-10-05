import classNames from 'classnames'
import { Avatar } from 'entities/Avatar'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import ArrowDown from 'shared/assets/icons/caret-down-bold.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { signOut } from 'features/AuthByEmail'
import { useEffect, useState } from 'react'
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import SignOutIcon from 'shared/assets/icons/sign-out-bold.svg'
import ProfileIcon from 'shared/assets/icons/user-circle-bold.svg'
import cls from './SettingBtn.module.scss'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SettingBtnProps {
    className?: string
}

export const SettingBtn = ({ className }: SettingBtnProps) => {
    const [show, setShow] = useState(false)
    const userData = useAppSelector(getUserData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation('pages')

    const onSignOut = () => {
        dispatch(signOut())
        navigate('/')
    }

    const onClickToggleSetting = (e: React.MouseEvent) => {
        // if ((e.target as HTMLElement).id !== 'container') {
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
            className={classNames(cls.SettingBtn, {}, [className])}
            onClick={onClickToggleSetting}
            id="profileBtn"
        >
            <div className={cls.btnContainer}>
                <Avatar size="S" avatarPath={userData.avatarPath} className={cls.avatar} />
                <ArrowDown className={cls.icon} />
            </div>

            <div className={classNames(cls.container, { [cls.active]: show }, [])} id="container">
                <span className={cls.link} onClick={onSignOut}>
                    <SignOutIcon className={cls.icon_link} />
                    {t('Выйти')}
                </span>
                <Link className={cls.link} to={'/changeProfile'}>
                    <ProfileIcon className={cls.icon_link} />
                    {t('Редактировать профиль')}
                </Link>
                <div className={cls.themeContainer}>
                    <LangSwitcher short />
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}

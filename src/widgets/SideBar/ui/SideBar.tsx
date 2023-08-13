import classNames from 'classnames'
import cls from './SideBar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={classNames(cls.SideBar, {}, [className])}>
            <nav className={cls.nav}>
                <AppLink to={'/profile'} className={cls.link}>
                    Моя страница
                </AppLink>
                <AppLink to={'/news'} className={cls.link}>
                    Новости
                </AppLink>
                <AppLink to={'/messages'} className={cls.link}>
                    Мессенджер
                </AppLink>
                <AppLink to={'/friends'} className={cls.link}>
                    Друзья
                </AppLink>
                <AppLink to={'/photos'} className={cls.link}>
                    Фотографии
                </AppLink>
            </nav>

            <ThemeSwitcher />
        </div>
    )
}

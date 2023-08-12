import classNames from 'classnames'
import cls from './SideBar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import ThemeSwitcher from 'widgets/ThemeSwither/ThemeSwitcher'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={classNames(cls.SideBar, {}, [className])}>
            <nav className={cls.nav}>
                <AppLink to={'/profile'}>Моя страница</AppLink>
                <AppLink to={'/news'}>Новости</AppLink>
                <AppLink to={'/messages'}>Мессенджер</AppLink>
                <AppLink to={'/friends'}>Друзья</AppLink>
                <AppLink to={'/photos'}>Фотографии</AppLink>
            </nav>

            <ThemeSwitcher />
        </div>
    )
}

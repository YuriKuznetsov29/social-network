import classNames from 'classnames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import ProfileIcon from 'shared/assets/icons/user-circle-bold.svg'
import NewsIcon from 'shared/assets/icons/article-bold.svg'
import ChatIcon from 'shared/assets/icons/chat-circle-bold.svg'
import UsersIcon from 'shared/assets/icons/users-bold.svg'
import { SidebarLoader } from 'shared/ui/SidebarLoader'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserInitied } from 'entities/UserData'
import { useTranslation } from 'react-i18next'
import cls from './SideBar.module.scss'
import { useMobile } from 'shared/lib/hook/useMobile'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const userInit = useAppSelector(getUserInitied)
    const { t } = useTranslation('pages')
    const isMobile = useMobile()

    return isMobile ? (
        <div className={cls.mobileSidebar}>
            <AppLink to={'/news'} className={cls.linkMobile} active activeClass={cls.activeLink}>
                <NewsIcon className={cls.icon} />
            </AppLink>
            <AppLink to={'/friends'} className={cls.linkMobile} active activeClass={cls.activeLink}>
                <UsersIcon className={cls.icon} />
            </AppLink>
            <AppLink
                to={'/messenger'}
                className={cls.linkMobile}
                active
                activeClass={cls.activeLink}
            >
                <ChatIcon className={cls.icon} />
            </AppLink>
            <AppLink to={'/profile'} className={cls.linkMobile} active activeClass={cls.activeLink}>
                <ProfileIcon className={cls.icon} />
            </AppLink>
        </div>
    ) : (
        <div className={classNames(cls.SideBar, {}, [className])}>
            <nav className={cls.nav}>
                {!userInit ? (
                    <SidebarLoader />
                ) : (
                    <>
                        <AppLink to={'/profile'} className={cls.link}>
                            <ProfileIcon className={cls.icon} />
                            {t('Моя страница')}
                        </AppLink>
                        <AppLink to={'/news'} className={cls.link}>
                            <NewsIcon className={cls.icon} />
                            {t('Новости')}
                        </AppLink>
                        <AppLink to={'/messenger'} className={cls.link}>
                            <ChatIcon className={cls.icon} />
                            {t('Мессенджер')}
                        </AppLink>
                        <AppLink to={'/friends'} className={cls.link}>
                            <UsersIcon className={cls.icon} />
                            {t('Друзья')}
                        </AppLink>
                    </>
                )}
            </nav>
        </div>
    )
}

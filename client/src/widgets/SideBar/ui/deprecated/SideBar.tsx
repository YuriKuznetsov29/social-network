import { getUserInitied } from '@/entities/UserData'
import NewsIcon from '@/shared/assets/icons/article-bold.svg'
import ChatIcon from '@/shared/assets/icons/chat-circle-bold.svg'
import ProfileIcon from '@/shared/assets/icons/user-circle-bold.svg'
import UsersIcon from '@/shared/assets/icons/users-bold.svg'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { SidebarLoader } from '@/shared/ui/SidebarLoader'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import cls from './SideBar.module.scss'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const userInit = useAppSelector(getUserInitied)
    const { t } = useTranslation('pages')
    const isMobile = useMobile()

    return isMobile ? (
        <div className={cls.mobileSidebar}>
            <AppLink
                to={'/news'}
                className={cls.linkMobile}
                active
                activeClass={cls.activeLink}
                scroll
            >
                <NewsIcon className={cls.mobileIcon} />
            </AppLink>
            <AppLink
                data-testid="friends-link"
                to={'/friends'}
                className={cls.linkMobile}
                active
                activeClass={cls.activeLink}
                scroll
            >
                <UsersIcon className={cls.mobileIcon} />
            </AppLink>
            <AppLink
                to={'/messenger'}
                className={cls.linkMobile}
                active
                activeClass={cls.activeLink}
                scroll
            >
                <ChatIcon className={cls.mobileIcon} />
            </AppLink>
            <AppLink
                to={'/profile'}
                className={cls.linkMobile}
                active
                activeClass={cls.activeLink}
                scroll
            >
                <ProfileIcon className={cls.mobileIcon} />
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

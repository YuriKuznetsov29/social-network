import classNames from 'classnames'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { Avatar } from '@/entities/Avatar'
import dayjs from 'dayjs'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '../model/selectors/getUserData'
import { UserDataLoader } from '@/shared/ui/UserDataLoader'
import { getUserInitied } from '../model/selectors/getUserInited'
import BirthIcon from '@/shared/assets/icons/gift-bold.svg'
import HomeIcon from '@/shared/assets/icons/house-bold.svg'
import FriendsIcon from '@/shared/assets/icons/users-bold.svg'
import PostIcon from '@/shared/assets/icons/note-pencil-bold.svg'
import { useTranslation } from 'react-i18next'
import { getUserDataLoading } from '../model/selectors/getUserDataLoading'
import cls from './UserData.module.scss'

interface UserDataProps {
    className?: string
}

export const UserData = ({ className }: UserDataProps) => {
    const userData = useAppSelector(getUserData)
    const userInit = useAppSelector(getUserInitied)
    const loading = useAppSelector(getUserDataLoading)
    const { t, i18n } = useTranslation('pages')

    if (loading || !userInit) return <UserDataLoader />

    return (
        <div className={classNames(cls.UserData, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                <div className={cls.avatarContainer}>
                    <Avatar
                        avatarPath={userData.avatarPath}
                        className={cls.avatar}
                        isOnline={userData.isOnline}
                        lastSeenOnline={userData.lastSeenOnline}
                        size="XL"
                    />
                    <h2 className={cls.name}>
                        <div>{userData.firstName}</div>
                        <div>{userData.lastName}</div>
                    </h2>
                </div>
                <div className={cls.dataWrapper}>
                    <div className={cls.valueContainer}>
                        <div className={cls.value}>
                            <div>
                                <div className={cls.valueTitle}>
                                    <BirthIcon className={cls.icon} />
                                    {t('День рождения')}
                                </div>
                                <div className={cls.valueTitle}>
                                    <HomeIcon className={cls.icon} />
                                    {t('Город')}
                                </div>
                                <div className={cls.valueTitle}>
                                    <FriendsIcon className={cls.icon} />
                                    {t('Друзья ')}
                                </div>
                                <div className={cls.valueTitle}>
                                    <PostIcon className={cls.icon} />
                                    {t('Посты')}
                                </div>
                            </div>
                            <div>
                                <div>
                                    {dayjs(userData.birthDay.split('.').reverse().join('-'))
                                        .locale(i18n.language)
                                        .format('D MMMM YYYY')}
                                </div>
                                <div>{userData.city}</div>
                                <div>{userData.friends?.length}</div>
                                <div>{userData?.posts}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}

import classNames from 'classnames'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Button } from 'shared/ui/Button/Button'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { Link } from 'react-router-dom'
import { Avatar } from 'entities/Avatar'
import dayjs from 'dayjs'
import cls from './UserData.module.scss'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from '../model/selectors/getUserData'

interface UserDataProps {
    className?: string
}

export const UserData = ({ className }: UserDataProps) => {
    const userData = useAppSelector(getUserData)

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
                    <div className={cls.valueWrapper}>
                        <div className={cls.valueContainer}>
                            <div className={cls.value}>
                                <div>
                                    <div className={cls.valueTitle}>День рождения:</div>
                                    <div className={cls.valueTitle}>Город:</div>
                                </div>
                                <div>
                                    <div>
                                        {dayjs(userData.birthDay.split('.').reverse().join('-'))
                                            .locale('ru')
                                            .format('D MMMM YYYY')}
                                    </div>
                                    <div>Новодвинск</div>
                                </div>
                            </div>

                            <Link to={'/changeProfile'}>
                                <Button className={cls.button}>Редактировать профиль</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={cls.count}>
                        <div className={cls.countData}>
                            <h2 className={cls.countValueTitle}>Друзья</h2>
                            <div className={cls.countValue}>{userData.friends.length}</div>
                        </div>
                        <div className={cls.countData}>
                            <h2 className={cls.countValueTitle}>Посты</h2>
                            <div className={cls.countValue}>5</div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}

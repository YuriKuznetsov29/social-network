import classNames from 'classnames'
import cls from './UserData.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
import { Button } from 'shared/ui/Button/Button'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
interface UserDataProps {
    className?: string
}

export const UserData = ({ className }: UserDataProps) => {
    const { userData } = useAppSelector(getAuthState)

    return (
        <div className={classNames(cls.UserData, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                {userData.avatarPath ? (
                    <img src={'http://localhost:8080/' + userData.avatarPath} alt="avatar" />
                ) : (
                    <User className={cls.user} />
                )}
                <div className={cls.dataWrapper}>
                    <div>{userData.firstName}</div>
                    <div>{userData.lastName}</div>
                    <div>{userData.email}</div>
                    <div>{userData.gender}</div>
                    <div>{userData.birthDay}</div>
                    <Button className={cls.button}>Редактировать профиль</Button>
                </div>
            </ContentContainer>
        </div>
    )
}

import classNames from 'classnames'
import cls from './UserData.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { Input } from 'shared/ui/Input/Input'
import { removeAvatar, uploadAvatar } from 'features/AuthByEmail'
import { Link } from 'react-router-dom'
interface UserDataProps {
    className?: string
}

export const UserData = ({ className }: UserDataProps) => {
    const { userData } = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()

    const onChangeLoadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    const onClickRemoveAvatar = () => {
        dispatch(removeAvatar())
    }

    return (
        <div className={classNames(cls.UserData, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                {userData.avatarPath ? (
                    <img
                        className={cls.user}
                        src={'http://localhost:8080/' + userData.avatarPath}
                        alt="avatar"
                    />
                ) : (
                    <User className={cls.user} />
                )}
                <div className={cls.dataWrapper}>
                    <div>{userData.firstName}</div>
                    <div>{userData.lastName}</div>
                    <div>{userData.email}</div>
                    <div>{userData.gender}</div>
                    <div>{userData.birthDay}</div>
                    <Link to={'/changeProfile'}>
                        <Button className={cls.button}>Редактировать профиль</Button>
                    </Link>
                </div>
            </ContentContainer>
        </div>
    )
}

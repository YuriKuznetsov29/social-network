import classNames from 'classnames'
import cls from './UserData.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
interface UserDataProps {
    className?: string
}

export const UserData = ({ className }: UserDataProps) => {
    return (
        <div className={classNames(cls.UserData, {}, [className])}>
            <ContentContainer className={cls.contentWrapper}>
                <User className={cls.user} />
                <div className={cls.dataWrapper}>
                    <div>Юрий Кузнецов</div>
                    <div>Новодвинск</div>
                    <div>Подробнее</div>
                </div>
            </ContentContainer>
        </div>
    )
}

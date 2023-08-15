import classNames from 'classnames'
import cls from './Friends.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'

interface FriendsProps {
    className?: string
}

export const Friends = ({ className }: FriendsProps) => {
    return (
        <div className={classNames(cls.Friends, {}, [className])}>
            <ContentContainer className={cls.container}>
                <h3>Друзья</h3>
                <div className={cls.friendsWrapper}>
                    <div className={cls.friend}>
                        <User className={cls.avatar} />
                        Имя
                    </div>
                    <div className={cls.friend}>
                        <User className={cls.avatar} />
                        Имя
                    </div>
                    <div className={cls.friend}>
                        <User className={cls.avatar} />
                        Имя
                    </div>
                    <div className={cls.friend}>
                        <User className={cls.avatar} />
                        Имя
                    </div>
                    <div className={cls.friend}>
                        <User className={cls.avatar} />
                        Имя
                    </div>
                    <div className={cls.friend}>
                        <User className={cls.avatar} />
                        Имя
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}

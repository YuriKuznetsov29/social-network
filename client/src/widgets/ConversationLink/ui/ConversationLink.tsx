import classNames from 'classnames'
import cls from './ConversationLink.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import User from 'shared/assets/icons/user.svg'

interface ConversationLinkProps {
    className?: string
    roomId: string
}

export const ConversationLink = ({ className, roomId }: ConversationLinkProps) => {
    return (
        <div className={classNames(cls.ConversationLink, {}, [className])}>
            <AppLink to={`/messenger/${roomId}`}>
                <div className={cls.dialog}>
                    <User className={cls.avatar} />
                    <div className={cls.dialogData}>
                        <div>
                            <div>Имя Фамилия</div>
                            <div>Сообщение</div>
                        </div>
                        <div>20:52</div>
                    </div>
                </div>
            </AppLink>
        </div>
    )
}

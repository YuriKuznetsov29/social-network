import classNames from 'classnames'
import cls from './Message.module.scss'
import { MessageData } from 'widgets/Dialog/model/useChat'
import { Avatar } from 'widgets/Avatar'
import dayjs from 'dayjs'

interface MessageProps {
    className?: string
    message: MessageData
}

export const Message = ({ className, message }: MessageProps) => {
    return (
        <div className={classNames(cls.Message, {}, [className])}>
            <Avatar avatarPath={message.avatarPath} />
            <div>
                <div>
                    {message.userName + ' '}
                    {dayjs(message.createdAt).locale('ru').toNow(true) + ' назад'}
                </div>
                <div>{message.textOrPathToFile}</div>
            </div>
        </div>
    )
}

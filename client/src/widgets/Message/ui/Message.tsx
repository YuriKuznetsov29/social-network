import classNames from 'classnames'
import cls from './Message.module.scss'
import { MessageData } from 'widgets/Dialog/model/useChat'
import { Avatar } from 'widgets/Avatar'

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
                    {message.userName} {message.createdAt}
                </div>
                <div>{message.textOrPathToFile}</div>
            </div>
        </div>
    )
}

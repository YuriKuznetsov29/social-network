import classNames from 'classnames'
import cls from './Messenger.module.scss'
import { Dialog } from 'widgets/Dialog'
import useChat from '../model/useChat'

interface MessengerProps {
    className?: string
}

export const Messenger = ({ className }: MessengerProps) => {
    const { log, messages, removeMessage, sendMessage, users } = useChat()

    return (
        <div className={classNames(cls.Messenger, {}, [className])}>
            <Dialog />
        </div>
    )
}

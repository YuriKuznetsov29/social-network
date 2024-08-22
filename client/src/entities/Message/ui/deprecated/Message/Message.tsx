import classNames from 'classnames'
import { MessageData } from '@/shared/lib/hook/useChat'
import dayjs from 'dayjs'
import { MutableRefObject, useEffect, useState } from 'react'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { Avatar } from '@/entities/Avatar'
import { useTranslation } from 'react-i18next'
import RemoveIcon from '@/shared/assets/icons/trash-bold.svg'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import cls from './Message.module.scss'
import { getUserDataById } from '@/shared/api/getUserDataById'

interface MessageProps {
    className?: string
    message: MessageData
    removeMessage: (messageId: string) => void
    scrollRef?: MutableRefObject<HTMLDivElement>
}

export const Message = ({ className, message, removeMessage, scrollRef }: MessageProps) => {
    const [author, setAuthor] = useState<IUser | null>(null)
    const { t, i18n } = useTranslation('pages')
    const userData = useAppSelector(getUserData)

    useEffect(() => {
        getUserDataById(message.author)
            .then((user) => {
                if (user) setAuthor(user)
            })
            .catch(console.log)
    }, [])

    return (
        <div className={classNames(cls.Message, {}, [className])} ref={scrollRef}>
            <Avatar avatarPath={author?.avatarPath} size="MS" className={cls.avatar} />
            <span className={cls.messageWrapper}>
                <div className={cls.nameWrapper}>
                    <div>
                        {/* <div className={cls.name}>{author?.firstName}</div> */}
                        <div className={cls.time}>
                            {dayjs(message.createdAt).locale(i18n.language).toNow(true) +
                                t(' назад')}
                        </div>
                    </div>

                    <div>
                        {userData?.userId === message.author && (
                            <RemoveIcon
                                className={cls.removeBtn}
                                onClick={() => removeMessage(message.messageId)}
                            />
                        )}
                    </div>
                </div>
                <div className={cls.messageText}>{message.textOrPathToFile}</div>
            </span>
        </div>
    )
}

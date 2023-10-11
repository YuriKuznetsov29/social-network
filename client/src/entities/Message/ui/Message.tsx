import classNames from 'classnames'
import { MessageData } from 'shared/lib/hook/useChat'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import $api, { API_URL } from '../../../shared/api/http/index'
import { Avatar } from 'entities/Avatar'
import cls from './Message.module.scss'
import { useTranslation } from 'react-i18next'
import RemoveIcon from 'shared/assets/icons/trash-bold.svg'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'

interface ResponseUserData {
    user: IUser
}

interface MessageProps {
    className?: string
    message: MessageData
    removeMessage: (messageId: string) => void
}

export const Message = ({ className, message, removeMessage }: MessageProps) => {
    const [author, setAuthor] = useState<IUser | null>(null)
    const { t, i18n } = useTranslation('pages')
    const userData = useAppSelector(getUserData)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await $api.get<ResponseUserData>(
                    `${API_URL}/user/${message.author}`
                )
                setAuthor(response.data.user)
            } catch (e) {
                console.log(e)
            }
        }

        getUserData()
    }, [])

    return (
        <div className={classNames(cls.Message, {}, [className])}>
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

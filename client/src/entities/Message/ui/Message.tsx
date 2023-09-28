import classNames from 'classnames'
import { MessageData } from 'app/hooks/useChat'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { IUser } from 'entities/UserData/model/types/IUser'
import $api, { API_URL } from '../../../shared/api/http/index'
import { Avatar } from 'entities/Avatar'
import cls from './Message.module.scss'

interface ResponseUserData {
    user: IUser
}

interface MessageProps {
    className?: string
    message: MessageData
}

export const Message = ({ className, message }: MessageProps) => {
    const [author, setAuthor] = useState<IUser | null>(null)

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
            <Avatar avatarPath={author?.avatarPath} />
            <div>
                <div className={cls.nameWrapper}>
                    <div>{author?.firstName + ' '}</div>
                    <div className={cls.time}>
                        {dayjs(message.createdAt).locale('ru').toNow(true) + ' назад'}
                    </div>
                </div>
                <div>{message.textOrPathToFile}</div>
            </div>
        </div>
    )
}

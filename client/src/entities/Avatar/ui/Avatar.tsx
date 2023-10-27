import classNames from 'classnames'
import { SERVER_URL } from '../../../shared/api/http/index'
import User from 'shared/assets/icons/user.svg'
import Circle from 'shared/assets/icons/dot-bold.svg'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { ImageModal } from 'shared/ui/ImageModal/ImageModal'
import { memo, useCallback, useState } from 'react'
import CircleXL from 'shared/assets/icons/xl-dot.svg'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    avatarPath?: string
    isOnline?: boolean
    lastSeenOnline?: string
    size?: 'XL' | 'L' | 'M' | 'MS' | 'S'
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, avatarPath, isOnline, lastSeenOnline, size = 'S' } = props
    const { t, i18n } = useTranslation('pages')
    const [isOpenImage, setIsOpenImage] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsOpenImage(false)
    }, [])

    const onShowModal = () => {
        setIsOpenImage(true)
    }

    return (
        <span>
            <div className={classNames(cls.Avatar, {}, [className])}>
                {avatarPath ? (
                    <>
                        <img
                            className={classNames(cls.user, {}, [[cls[size]]])}
                            src={SERVER_URL + avatarPath}
                            alt="avatar"
                            onClick={onShowModal}
                        />
                        {size === 'XL' && avatarPath && (
                            <ImageModal
                                imagePath={avatarPath}
                                isOpen={isOpenImage}
                                onClose={onCloseModal}
                                alt="avatar"
                            />
                        )}
                    </>
                ) : (
                    <User className={classNames(cls.user, {}, [[cls[size]]])} />
                )}

                {lastSeenOnline &&
                    size === 'XL' &&
                    (isOnline ? (
                        <CircleXL className={cls.onlineXL} />
                    ) : (
                        <span className={cls.offlineWrapper}>
                            <span className={cls.offline}>
                                {dayjs(lastSeenOnline)
                                    .locale(i18n.language + '-short')
                                    .toNow(true)}
                            </span>
                        </span>
                    ))}

                {isOnline && size !== 'XL' && (
                    <Circle className={classNames(cls.online, {}, [[cls[size]]])} />
                )}
            </div>
        </span>
    )
})

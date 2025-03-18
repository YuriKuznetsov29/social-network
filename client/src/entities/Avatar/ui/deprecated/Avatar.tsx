import { SERVER_URL } from '@/shared/api/http'
// import Circle from '@/shared/assets/icons/dot-bold.svg'
import Circle from '../../../../shared/assets/icons/dot-bold.svg'
import User from '@/shared/assets/icons/user.svg'
import CircleXL from '@/shared/assets/icons/xl-dot.svg'
import { ImageModal } from '@/shared/ui/ImageModal/ImageModal'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    avatarPath?: string
    isOnline?: boolean
    lastSeenOnline?: string
    size?: 'XL' | 'L' | 'M' | 'MS' | 'S' | string
    click?: boolean
    userId?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, avatarPath, isOnline, lastSeenOnline, size = 'S', click, userId } = props
    const { t, i18n } = useTranslation('pages')
    const [isOpenImage, setIsOpenImage] = useState(false)
    const navigate = useNavigate()

    const onCloseModal = useCallback(() => {
        setIsOpenImage(false)
    }, [])

    const onShowModal = () => {
        setIsOpenImage(true)
    }

    const onClickNavigate = () => {
        if (click && userId && size !== 'XL') {
            navigate(`/${userId}`)
        }
    }

    return (
        <span>
            <div
                data-testid="avatar"
                className={classNames(
                    cls.Avatar,
                    { [cls.click]: [click && userId && size !== 'XL'] },
                    [className]
                )}
                onClick={onClickNavigate}
            >
                {avatarPath ? (
                    <>
                        <img
                            data-testid="user-avatar"
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
                            <span data-testid="lastSeenOnline" className={cls.offline}>
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

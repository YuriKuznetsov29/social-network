import classNames from 'classnames'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getNotification } from '../model/selectors/getNotification'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { useDispatch } from 'react-redux'
import { notificationsActions } from '../model/slice/notificationsSlice'
import cls from './Notification.module.scss'

interface NotificationProps {
    className?: string
}

export const Notification = ({ className }: NotificationProps) => {
    const [show, setShow] = useState(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
    const notification = useAppSelector(getNotification)
    const dispatch = useDispatch()

    useEffect(() => {
        if (notification !== '') {
            setShow(true)
            timeRef.current = setTimeout(() => {
                setShow(false)
                dispatch(notificationsActions.setNotification(''))
            }, 3000)
        }

        return () => {
            clearTimeout(timeRef.current)
        }
    }, [notification])

    if (!show) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Notification, {}, [])}>{notification}</div>
        </Portal>
    )
}

import CloseIcon from '@/shared/assets/icons/close.svg'
import classNames from 'classnames'
import React, { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
                document.body.style.overflow = 'auto'
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(
                    cls.Modal,
                    {
                        [cls.opened]: isOpen,
                        [cls.isClosing]: isClosing,
                    },
                    [className]
                )}
            >
                <CloseIcon className={cls.closeIcon} onClick={closeHandler} />
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

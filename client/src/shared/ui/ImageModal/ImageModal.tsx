import { ReactNode, useCallback, useState } from 'react'
import { Modal } from '../Modal/Modal'
import classNames from 'classnames'
import cls from './ImageModal.module.scss'
import { SERVER_URL } from 'shared/api/http'

interface ImageProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    imagePath: string
    alt?: string
}

export const ImageModal = ({
    className,
    imagePath,
    alt = 'image',
    isOpen,
    onClose,
}: ImageProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <img className={cls.image} src={SERVER_URL + imagePath} alt={alt} />
        </Modal>
    )
}

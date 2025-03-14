import { SERVER_URL } from '@/shared/api/http'

import { Modal } from '../Modal/Modal'
import cls from './ImageModal.module.scss'

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
        <Modal isOpen={isOpen} onClose={onClose} className={cls.background}>
            <img
                data-testid="avatar-modal"
                className={cls.image}
                src={SERVER_URL + imagePath}
                alt={alt}
            />
        </Modal>
    )
}

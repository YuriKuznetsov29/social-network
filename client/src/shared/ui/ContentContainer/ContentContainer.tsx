import classNames from 'classnames'
import cls from './ContentContainer.module.scss'
import { ReactNode } from 'react'

interface ContentContainerProps {
    className?: string
    children: ReactNode
}

export const ContentContainer = ({ className, children }: ContentContainerProps) => {
    return (
        <div className={classNames(cls.ContentContainer, { [className]: true }, [className])}>
            {children}
        </div>
    )
}

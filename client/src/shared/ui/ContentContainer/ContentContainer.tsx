import classNames from 'classnames'
import { ReactNode } from 'react'

import cls from './ContentContainer.module.scss'

interface ContentContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const ContentContainer = ({ className, children, ...otherProps }: ContentContainerProps) => {
    return (
        <div className={classNames(cls.ContentContainer, {}, [className])} {...otherProps}>
            {children}
        </div>
    )
}

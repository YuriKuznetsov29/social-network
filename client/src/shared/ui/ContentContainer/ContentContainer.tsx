import classNames from 'classnames'
import cls from './ContentContainer.module.scss'
import { ReactNode } from 'react'

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

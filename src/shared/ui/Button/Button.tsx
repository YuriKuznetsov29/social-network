import classNames from 'classnames'
import cls from './Button.module.scss'
import { ReactNode } from 'react'

interface ButtonProps {
    className?: string
    children: ReactNode
}

export const Button = ({ className, children }: ButtonProps) => {
    return <div className={classNames(cls.Button, {}, [className])}>{children}</div>
}

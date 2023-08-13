import classNames from 'classnames'
import cls from './Button.module.scss'
import { ReactNode } from 'react'

interface ButtonProps {
    className?: string
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ className, children, type }: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className])} type={type}>
            {children}
        </button>
    )
}

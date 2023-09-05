import classNames from 'classnames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ className, children, type, ...otherProps }: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className])} type={type} {...otherProps}>
            {children}
        </button>
    )
}

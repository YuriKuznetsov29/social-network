import classNames from 'classnames'
import cls from './Input.module.scss'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
    className?: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
}

export const Input = ({ className, type, placeholder }: InputProps) => {
    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            type={type}
            placeholder={placeholder}
        />
    )
}

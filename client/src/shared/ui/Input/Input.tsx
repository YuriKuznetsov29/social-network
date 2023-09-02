import classNames from 'classnames'
import cls from './Input.module.scss'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
    className?: string
    value?: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
    onChange?: (value: string) => void
}

export const Input = (pros: InputProps) => {
    const { className, value, type, placeholder, onChange } = pros

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}

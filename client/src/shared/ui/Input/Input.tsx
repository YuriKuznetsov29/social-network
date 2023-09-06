import classNames from 'classnames'
import cls from './Input.module.scss'
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    placeholder?: string
    onChange?: (value: string) => void
}

export const Input = (pros: InputProps) => {
    const { className, value, placeholder, onChange, ...otherProps } = pros

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            value={value}
            placeholder={placeholder}
            onChange={onChangeHandler}
            {...otherProps}
        />
    )
}

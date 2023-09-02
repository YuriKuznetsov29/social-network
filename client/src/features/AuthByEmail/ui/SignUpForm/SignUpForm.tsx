import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { authActions } from 'features/AuthByEmail/model/slice/signInSlice'
import classNames from 'classnames'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { signUpByEmail } from 'features/AuthByEmail/model/services/signUpByEmail'
import cls from './SignUpForm.module.scss'

interface SignUpFormProps {
    className?: string
}

export const SignUpForm = ({ className }: SignUpFormProps) => {
    const { email, password } = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(authActions.setEmail(value))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(authActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            dispatch(signUpByEmail({ email, password }))
        },
        [dispatch, email, password]
    )

    return (
        <div className={classNames(cls.SignUpForm, {}, [className])}>
            <form className={cls.form}>
                <Input
                    className={cls.input}
                    type="text"
                    placeholder="Введите Email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input
                    className={cls.input}
                    type="text"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={onChangePassword}
                />
                <Button onClick={(e) => onLoginClick(e)}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}

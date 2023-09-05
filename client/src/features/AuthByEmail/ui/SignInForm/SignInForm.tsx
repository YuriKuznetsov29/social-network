import classNames from 'classnames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { useCallback } from 'react'
import { authActions } from 'features/AuthByEmail/model/slice/signInSlice'
import { signInByEmail } from 'features/AuthByEmail/model/services/singInByEmail'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import cls from './SignInForm.module.scss'
import { useNavigate } from 'react-router-dom'

interface SignInFormProps {
    className?: string
}

export const SignInForm = ({ className }: SignInFormProps) => {
    const { email, password } = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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
            dispatch(signInByEmail({ email, password }))
            navigate('/profile')
        },
        [dispatch, email, password]
    )

    return (
        <div className={classNames(cls.SignInForm, {}, [className])}>
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
                <Button onClick={(e) => onLoginClick(e)}>Войти</Button>
            </form>
        </div>
    )
}

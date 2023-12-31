import classNames from 'classnames'
import { Button } from 'shared/ui/Button/Button'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { useCallback, useEffect, useState } from 'react'
import { authActions } from 'features/AuthByEmail/model/slice/authSlice'
import { signInByEmail } from 'features/AuthByEmail/model/services/singInByEmail'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { getLoadingAuthStatus } from 'features/AuthByEmail/model/selectors/getLoadingAuthStatus'
import { Loader } from 'shared/ui/Loader'
import { getAuthError } from 'features/AuthByEmail/model/selectors/getAuthError'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import Eye from 'shared/assets/icons/eye.svg'
import EyeSlash from 'shared/assets/icons/eye-slash.svg'
import cls from './SignInForm.module.scss'

interface SignInFormProps {
    className?: string
}

export interface Values {
    email: string
    password: string
}

export const SignInForm = ({ className }: SignInFormProps) => {
    const { isAuth } = useAppSelector(getAuthState)
    const loading = useAppSelector(getLoadingAuthStatus)
    const error = useAppSelector(getAuthError)
    const [showPassword, setShowPassword] = useState('password')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation('authForms')

    const toggleShowPassword = () => {
        if (showPassword === 'password') {
            setShowPassword('text')
        } else {
            setShowPassword('password')
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string().email(t('Неправильный формат email')).required(t('Введите email')),
        password: Yup.string().required(t('Введите пароль')),
    })

    const onLoginClick = (email: string, password: string) => {
        dispatch(signInByEmail({ email, password, navigate }))
    }

    useEffect(() => {
        if (isAuth) {
            navigate('/profile', { replace: true })
        }
    }, [isAuth])

    return (
        <div className={classNames(cls.SignInForm, {}, [className])}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values: Values) => {
                    const { email, password } = values
                    onLoginClick(email, password)
                }}
            >
                <Form className={cls.form} autoComplete="off">
                    <label className={cls.fieldContainer} htmlFor="email">
                        {t('Email')}
                        <Field
                            className={cls.input}
                            type="text"
                            placeholder={t('введите email')}
                            name="email"
                        />
                        <ErrorMessage className={cls.error} component="div" name="email" />
                    </label>

                    <label className={cls.fieldContainer} htmlFor="password">
                        {t('Пароль')}
                        <Field
                            className={cls.input}
                            name="password"
                            placeholder={t('введите пароль')}
                            type={showPassword}
                        />
                        <div className={cls.showPasswordWrapper} onClick={toggleShowPassword}>
                            {showPassword === 'password' ? (
                                <EyeSlash className={cls.showPasswordIcon} />
                            ) : (
                                <Eye className={cls.showPasswordIcon} />
                            )}
                        </div>

                        <ErrorMessage className={cls.error} component="div" name="password" />
                    </label>
                    <div className={cls.errorBlock}>
                        {loading && <Loader size="M" />}
                        {error && !loading && <div className={cls.serverError}>{error}</div>}
                    </div>
                    <Button className={cls.inputBtn} type="submit" disabled={loading}>
                        {t('Войти')}
                    </Button>
                    <AppLink to="signUp" className={cls.btnWrapper}>
                        <Button className={cls.regBtn}>{t('Зарегистрироваться')}</Button>
                    </AppLink>
                    <div className={cls.switchersContainer}>
                        <LangSwitcher short />
                        <ThemeSwitcher />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import classNames from 'classnames'
import { Button } from 'shared/ui/Button/Button'
import { RequestAuthData, signUpByEmail } from 'features/AuthByEmail/model/services/signUpByEmail'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import * as Yup from 'yup'
import cls from './SignUpForm.module.scss'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { getLoadingAuthStatus } from 'features/AuthByEmail/model/selectors/getLoadingAuthStatus'
import { getAuthError } from 'features/AuthByEmail/model/selectors/getAuthError'
import { Loader } from 'shared/ui/Loader'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getRegStatus } from 'features/AuthByEmail/model/selectors/getRegStatus'
import dayjs from 'dayjs'

export interface Values {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    gender: 'male' | 'female' | ''
    birthDay: string
    city: string
}

interface SignUpFormProps {
    className?: string
}

const transformDate = dayjs().format('YYYY-MM-DD')

export const SignUpForm = ({ className }: SignUpFormProps) => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(getLoadingAuthStatus)
    const error = useAppSelector(getAuthError)
    const regStatus = useAppSelector(getRegStatus)
    const { t } = useTranslation('authForms')

    const validationSchema = Yup.object({
        firstName: Yup.string().trim().required(t('Введите имя')),
        lastName: Yup.string().trim().required(t('Введите фамилию')),
        email: Yup.string().email(t('Неправильный формат email')).required(t('Введите Email')),
        birthDay: Yup.date()
            .max(new Date(), t('Введите корректную дату'))
            .min('1969-11-13', t('Date is too early'))
            .required(t('Введите дату рождения')),
        password: Yup.string()
            .min(8, t('Пароль не должен быть короче 8 символов'))
            .required(t('Введите пароль')),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], t('Пароли не совпадают'))
            .min(8, t('Пароль не должен быть короче 8 символов'))
            .required('Введите пароль'),
        city: Yup.string().trim().required(t('Введите город')),
        gender: Yup.string().required(t('Выберете значение')),
    })

    return (
        <div className={classNames(cls.SignUpForm, {}, [className])}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    birthDay: '',
                    gender: '',
                    city: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values: Values) => {
                    const { firstName, lastName, email, password, gender, birthDay, city } = values
                    dispatch(
                        signUpByEmail({
                            firstName,
                            lastName,
                            email,
                            password,
                            gender,
                            birthDay,
                            city,
                        })
                    )
                }}
            >
                <Form className={cls.form} autoComplete="off">
                    <label htmlFor="firstName">{t('Имя')}</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="firstName"
                            name="firstName"
                            placeholder={t('введите имя')}
                        />
                        <ErrorMessage className={cls.error} component="div" name="firstName" />
                    </div>

                    <label htmlFor="lastName">{t('Фамилия')}</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="lastName"
                            name="lastName"
                            placeholder={t('введите фамилию')}
                        />
                        <ErrorMessage className={cls.error} component="div" name="lastName" />
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="email"
                            name="email"
                            placeholder={t('введите email')}
                            type="email"
                            autocomplete="off"
                        />
                        <ErrorMessage className={cls.error} component="div" name="email" />
                    </div>

                    <label htmlFor="password">{t('Пароль')}</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="password"
                            name="password"
                            placeholder={t('введите пароль')}
                            type="password"
                        />
                        <ErrorMessage className={cls.error} component="div" name="password" />
                    </div>

                    <label htmlFor="confirmPassword">{t('Повторите пароль')}</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder={t('повторите пароль')}
                            type="password"
                        />
                        <ErrorMessage
                            className={cls.error}
                            component="div"
                            name="confirmPassword"
                        />
                    </div>

                    <label htmlFor="confirmPassword">{t('Введите ваш город')}</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="city"
                            name="city"
                            placeholder={t('ваш город')}
                            type="text"
                        />
                        <ErrorMessage className={cls.error} component="div" name="city" />
                    </div>

                    <label htmlFor="confirmPassword">{t('Введите дату рождения')}</label>
                    <div className={cls.fieldContainer}>
                        <Field
                            className={cls.input}
                            id="birthDay"
                            name="birthDay"
                            placeholder="dd.mm.yyyy"
                            type="date"
                        />
                        <ErrorMessage className={cls.error} component="div" name="birthDay" />
                    </div>

                    <label htmlFor="gender">{t('Пол')}</label>
                    <div className={cls.fieldContainer}>
                        <Field className={cls.select} id="gender" name="gender" as="select">
                            <option disabled value="">
                                {t('Выберете ваш пол')}
                            </option>
                            <option value="male">{t('мужчина')}</option>
                            <option value="female">{t('женщина')}</option>
                        </Field>
                        <ErrorMessage className={cls.error} component="div" name="gender" />
                    </div>

                    <div className={cls.errorBlock}>
                        {regStatus && (
                            <div className={cls.regSuccess}>
                                {' '}
                                {t('Вы успешно зарегистрировались, войдите под своим email.')}{' '}
                            </div>
                        )}
                        {loading && <Loader size="M" />}
                        {error && !loading && <div className={cls.serverError}>{error}</div>}
                    </div>

                    <Button className={cls.submitBtn} type="submit">
                        {t('Зарегистрироваться')}
                    </Button>
                    <Link className={cls.link} to={'/'}>
                        <Button className={cls.signInBtn} type="button">
                            {t('Войти')}
                        </Button>
                    </Link>

                    <div className={cls.switchersContainer}>
                        <LangSwitcher short />
                        <ThemeSwitcher />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

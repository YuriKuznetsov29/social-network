import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import classNames from 'classnames'
import { signUpByEmail } from 'features/AuthByEmail/model/services/signUpByEmail'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import parse from 'date-fns/parse'
import cls from './ChangeUserDataForm.module.scss'
import { format } from 'date-fns'
import { changeUserData } from 'features/AuthByEmail/model/services/changeUserData'

export interface Values {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    gender: 'male' | 'female'
    birthDay: string
}

interface SignUpFormProps {
    className?: string
}

const requiredString = Yup.string().required('Введите значение')
const PersonSchema = Yup.object({
    firstName: requiredString,
    lastName: requiredString,
    email: Yup.string().email('Неправильный формат email').required('Введите Email'),
    birthDay: Yup.date()
        .transform(function (value, originalValue) {
            if (this.isType(value)) {
                return value
            }
            const result = parse(originalValue, 'dd.MM.yyyy', new Date())
            return result
        })
        .typeError('Введите действительную дату рождения')
        .required('Введите дату рождения')
        .min('1969-11-13', 'Date is too early')
        .max(format(new Date(), 'dd-MM-yyyy'), 'Вы еще не родились'),
    password: Yup.string()
        .min(8, 'Пароль не должен быть короче 8 символов')
        .required('Введите пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .min(8, 'Пароль не должен быть короче 8 символов')
        .required('Введите пароль'),
    gender: Yup.string().required('Выберете значение'),
})

export const ChangeUserDataForm = ({ className }: SignUpFormProps) => {
    const {
        userData: { birthDay, email, firstName, lastName, gender, userId },
    } = useAppSelector(getAuthState)
    const dispatch = useAppDispatch()

    return (
        <div className={classNames(cls.SignUpForm, {}, [className])}>
            <Formik
                initialValues={{
                    firstName,
                    lastName,
                    email,
                    password: '',
                    confirmPassword: '',
                    birthDay,
                    gender,
                }}
                validationSchema={PersonSchema}
                onSubmit={(values: Values) => {
                    const { firstName, lastName, email, password, gender, birthDay } = values
                    dispatch(
                        changeUserData({
                            firstName,
                            lastName,
                            email,
                            password,
                            gender,
                            birthDay,
                            userId,
                        })
                    )
                }}
            >
                <Form className={cls.form} autoComplete="off">
                    <label htmlFor="firstName">Имя</label>
                    <Field id="firstName" name="firstName" placeholder="введите имя" />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Фамилия</label>
                    <Field id="lastName" name="lastName" placeholder="введите фамилию" />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="введите email" type="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="password">Пароль</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="введите пароль"
                        type="password"
                        autoComplete="off"
                    />
                    <ErrorMessage name="password" />

                    <label htmlFor="confirmPassword">Повторите пароль</label>
                    <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="повторите пароль"
                        type="password"
                        autoComplete="off"
                    />
                    <ErrorMessage name="confirmPassword" />

                    <label htmlFor="confirmPassword">Введите дату рождения</label>
                    <Field id="birthDay" name="birthDay" placeholder="dd.mm.yyyy" />
                    <ErrorMessage name="birthDay" />

                    <label htmlFor="gender">Пол</label>
                    <Field id="gender" name="gender" as="select">
                        <option disabled value="">
                            Выберете ваш пол
                        </option>
                        <option value="male">мужчина</option>
                        <option value="female">женщина</option>
                    </Field>
                    <ErrorMessage className={cls.input} name="gender" />

                    <button type="submit">Сохранить изменения</button>
                </Form>
            </Formik>
        </div>
    )
}

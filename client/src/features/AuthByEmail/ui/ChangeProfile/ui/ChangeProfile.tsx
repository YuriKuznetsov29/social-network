import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import * as Yup from 'yup'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { changeUserData } from 'features/AuthByEmail/model/services/changeUserData'
import { Values } from 'features/AuthByEmail/ui/SignUpForm/SignUpForm'
import User from 'shared/assets/icons/user.svg'
import { removeAvatar, uploadAvatar } from 'features/AuthByEmail'
import { Button } from 'shared/ui/Button/Button'
import cls from './ChangeProfile.module.scss'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'

const requiredString = Yup.string().required('Введите значение')
const PersonSchema = Yup.object({
    firstName: requiredString,
    lastName: requiredString,
    email: Yup.string().email('Неправильный формат email').required('Введите Email'),
    birthDay: Yup.string()
        // Yup.date()
        //     .transform(function (value, originalValue) {
        //         if (this.isType(value)) {
        //             return value
        //         }
        //         const result = parse(originalValue, 'dd.MM.yyyy', new Date())
        //         return result
        //     })
        //     .typeError('Введите действительную дату рождения')
        .required('Введите дату рождения'),
    //     .min('1969-11-13', 'Date is too early')
    //     .max(format(new Date(), 'dd-MM-yyyy'), 'Вы еще не родились'),
    password: Yup.string().min(8, 'Пароль не должен быть короче 8 символов'),
    // .required('Введите пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .min(8, 'Пароль не должен быть короче 8 символов'),
    // .required('Введите пароль'),
    gender: Yup.string().required('Выберете значение'),
})

interface ChangeProfileProps {
    className?: string
}

export const ChangeProfile = ({ className }: ChangeProfileProps) => {
    const { birthDay, email, firstName, lastName, gender, userId, avatarPath } =
        useAppSelector(getUserData)
    const dispatch = useAppDispatch()

    const onChangeLoadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file instanceof File) dispatch(uploadAvatar(file))
    }

    const onClickRemoveAvatar = () => {
        dispatch(removeAvatar())
    }

    return (
        <ContentContainer className={cls.contentWrapper}>
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

                    <div className={cls.avatarBlock}>
                        {avatarPath ? (
                            <img
                                className={cls.user}
                                src={'http://localhost:8080/' + avatarPath}
                                alt="avatar"
                            />
                        ) : (
                            <User className={cls.user} />
                        )}
                        <input
                            accept="image/*"
                            type="file"
                            onChange={(e) => onChangeLoadAvatar(e)}
                        />
                        <Button onClick={onClickRemoveAvatar}>Удалить аватар</Button>
                    </div>

                    <button type="submit">Сохранить изменения</button>
                </Form>
            </Formik>
        </ContentContainer>
    )
}

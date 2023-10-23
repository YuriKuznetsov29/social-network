import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import * as Yup from 'yup'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { changeUserData } from 'features/AuthByEmail/model/services/changeUserData'
import { removeAvatar, uploadAvatar } from 'features/UploadAvatar'
import { Button } from 'shared/ui/Button/Button'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { Avatar } from 'entities/Avatar'
import { useTranslation } from 'react-i18next'
import cls from './ChangeProfile.module.scss'

export interface Values {
    firstName: string
    lastName: string
    email: string
    gender: 'male' | 'female' | ''
    birthDay: string
    city: string
}

export const ChangeProfile = () => {
    const { birthDay, email, firstName, lastName, gender, userId, avatarPath, city } =
        useAppSelector(getUserData)
    const { t } = useTranslation('authForms')
    const dispatch = useAppDispatch()

    const onChangeLoadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file instanceof File) dispatch(uploadAvatar(file))
    }

    const onClickRemoveAvatar = () => {
        dispatch(removeAvatar())
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().trim().required(t('Введите имя')),
        lastName: Yup.string().trim().required(t('Введите фамилию')),
        email: Yup.string().email(t('Неправильный формат email')).required(t('Введите Email')),
        birthDay: Yup.date()
            .max(new Date(), t('Введите корректную дату'))
            .min('1969-11-13', t('Date is too early'))
            .required(t('Введите дату рождения')),
        city: Yup.string().trim().required(t('Введите город')),
        gender: Yup.string().required(t('Выберете значение')),
    })

    return (
        <ContentContainer className={cls.contentWrapper}>
            <Formik
                initialValues={{
                    firstName,
                    lastName,
                    email,
                    birthDay,
                    gender,
                    city,
                }}
                validationSchema={validationSchema}
                onSubmit={(values: Values) => {
                    const { firstName, lastName, email, gender, birthDay, city } = values
                    dispatch(
                        changeUserData({
                            firstName,
                            lastName,
                            email,
                            gender,
                            birthDay,
                            userId,
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
                        />
                        <ErrorMessage className={cls.error} component="div" name="email" />
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
                        />
                        <ErrorMessage className={cls.error} component="div" name="birthDay" />
                    </div>

                    <label htmlFor="gender">{t('Пол')}</label>
                    <Field className={cls.select} id="gender" name="gender" as="select">
                        <option disabled value="">
                            {t('Выберете ваш пол')}
                        </option>
                        <option value="male">{t('мужчина')}</option>
                        <option value="female">{t('женщина')}</option>
                    </Field>
                    <ErrorMessage className={cls.input} name="gender" />

                    <div className={cls.avatarBlock}>
                        <Avatar avatarPath={avatarPath} size="XL" className={cls.avatar} />
                        <input
                            className={cls.input_file}
                            accept="image/*"
                            type="file"
                            id="input-file"
                            onChange={(e) => onChangeLoadAvatar(e)}
                        />

                        <label className={cls.classLabel} htmlFor="input-file">
                            {t('Загрузить аватар')}
                        </label>
                        <Button className={cls.rmBtn} onClick={onClickRemoveAvatar}>
                            {t('Удалить аватар')}
                        </Button>
                    </div>

                    <Button className={cls.saveBtn} type="submit">
                        {t('Сохранить изменения')}
                    </Button>
                </Form>
            </Formik>
        </ContentContainer>
    )
}

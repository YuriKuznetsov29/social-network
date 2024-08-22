import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import classNames from 'classnames'
import { signUpByEmail } from '@/features/AuthByEmail/model/services/signUpByEmail/signUpByEmail'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { getLoadingAuthStatus } from '@/features/AuthByEmail/model/selectors/getLoadingAuthStatus/getLoadingAuthStatus'
import { getAuthError } from '@/features/AuthByEmail/model/selectors/getAuthError/getAuthError'
import { Loader } from '@/shared/ui/Loader'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { getRegStatus } from '@/features/AuthByEmail/model/selectors/getRegStatus/getRegStatus'
import dayjs, { Dayjs } from 'dayjs'
import cls from './SignUpForm.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { SignUpForm as SignUpFormDeprecated } from '../deprecated/SignUpForm/SignUpForm'
import {
    Avatar,
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    Link,
    Button,
    Select,
    MenuItem,
    TextFieldProps,
    InputLabel,
    Alert,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateField } from '@mui/x-date-pickers'
import { LoadingButton } from '@mui/lab'

export interface Values {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    gender: 'male' | 'female' | ''
    birthDay: Dayjs
    city: string
}

interface SignUpFormProps {
    className?: string
}

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
            // .transform((value, originalValue, context) => {
            //     if (context.isType(value)) return value

            //     value = originalValue.split('.').reverse().join('-')
            //     return dayjs(value).isValid() ? dayjs(value).toDate() : new Date('')
            // })
            .max(new Date(), t('Введите корректную дату'))
            .min('1969-11-13', t('Date is too early'))
            .required(t('Введите дату рождения')),
        password: Yup.string()
            .min(8, t('Пароль не должен быть короче 8 символов'))
            .required(t('Введите пароль')),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], t('Пароли не совпадают'))
            .min(8, t('Пароль не должен быть короче 8 символов'))
            .required(t('Введите пароль')),
        city: Yup.string().trim().required(t('Введите ваш город')),
        gender: Yup.string().required(t('Выберете значение')),
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            birthDay: '' as unknown as Dayjs,
            gender: '',
            city: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: Values) => {
            const { firstName, lastName, email, password, gender, birthDay, city } = values
            dispatch(
                signUpByEmail({
                    firstName,
                    lastName,
                    email,
                    password,
                    gender,
                    birthDay: birthDay as unknown as string,
                    city,
                })
            )
        },
    })

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={formik.handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {regStatus && (
                                        <Alert severity="success">
                                            {t(
                                                'Вы успешно зарегистрировались, войдите под своим email.'
                                            )}
                                        </Alert>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    {error && !loading && <Alert severity="error">{error}</Alert>}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label={t('введите имя')}
                                        autoFocus
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.firstName &&
                                            Boolean(formik.errors.firstName)
                                        }
                                        helperText={
                                            formik.touched.firstName && formik.errors.firstName
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label={t('введите фамилию')}
                                        name="lastName"
                                        autoComplete="family-name"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.lastName &&
                                            Boolean(formik.errors.lastName)
                                        }
                                        helperText={
                                            formik.touched.lastName && formik.errors.lastName
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label={t('введите email')}
                                        name="email"
                                        autoComplete="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label={t('введите пароль')}
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.password &&
                                            Boolean(formik.errors.password)
                                        }
                                        helperText={
                                            formik.touched.password && formik.errors.password
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label={t('повторите пароль')}
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="new-password"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.confirmPassword &&
                                            Boolean(formik.errors.confirmPassword)
                                        }
                                        helperText={
                                            formik.touched.confirmPassword &&
                                            formik.errors.confirmPassword
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="city"
                                        label={t('Введите ваш город')}
                                        type="text"
                                        id="city"
                                        autoComplete="address-level2"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            disableFuture
                                            sx={{ width: '100%' }}
                                            name="birthDay"
                                            label={t('Введите дату рождения')}
                                            onChange={(value) => {
                                                formik.setFieldValue(
                                                    'birthDay',
                                                    dayjs(value).format('YYYY-MM-DD')
                                                )
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        required
                                        fullWidth
                                        id="gender"
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.gender && Boolean(formik.errors.gender)
                                        }
                                        // helperText={formik.touched.gender && formik.errors.gender}
                                    >
                                        <MenuItem value="male">{t('мужчина')}</MenuItem>
                                        <MenuItem value="female">{t('женщина')}</MenuItem>
                                    </Select>
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox value="allowExtraEmails" color="primary" />
                                        }
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid> */}
                            </Grid>
                            <LoadingButton
                                sx={{ mt: 3, mb: 2 }}
                                type="submit"
                                fullWidth
                                loading={loading}
                                loadingIndicator="Loading…"
                                variant="contained"
                            >
                                {t('Зарегистрироваться')}
                            </LoadingButton>
                            <Grid sx={{ mb: 2 }} container>
                                <Grid item xs>
                                    <LangSwitcher />
                                </Grid>
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        {t('У вас уже есть аккаунт? Войти')}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 5 }} /> */}
                </Container>
            }
            off={<SignUpFormDeprecated className={className} />}
        />
    )
}

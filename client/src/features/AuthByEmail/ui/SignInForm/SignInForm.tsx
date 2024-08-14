import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { SignInForm as SignInFormDeprecated } from '../deprecated/SignInForm/SignInForm'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
    Paper,
    InputAdornment,
    IconButton,
} from '@mui/material'
import { Copyright, Visibility, VisibilityOff } from '@mui/icons-material'
import { t } from 'i18next'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { signInByEmail } from '../../model/services/signInByEmail/singInByEmail'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getAuthError } from '../../model/selectors/getAuthError/getAuthError'
import { getLoadingAuthStatus } from '../../model/selectors/getLoadingAuthStatus/getLoadingAuthStatus'
import { getAuthStatus } from '../../model/selectors/getAuthStatus/getAuthStatus'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'

interface SignInFormProps {
    className?: string
}

export interface Values {
    email: string
    password: string
}

export const SignInForm = ({ className }: SignInFormProps) => {
    const [showPassword, setShowPassword] = useState('password')
    const isAuth = useAppSelector(getAuthStatus)
    const loading = useAppSelector(getLoadingAuthStatus)
    const error = useAppSelector(getAuthError)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation('authForms')

    const validationSchema = Yup.object({
        email: Yup.string().email(t('Неправильный формат email')).required(t('Введите email')),
        password: Yup.string().required(t('Введите пароль')),
    })

    const onLoginClick = (email: string, password: string) => {
        dispatch(signInByEmail({ email, password, navigate }))
    }

    const handleClickShowPassword = () => {
        if (showPassword === 'password') {
            setShowPassword('text')
        } else {
            setShowPassword('password')
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: Values) => {
            const { email, password } = values
            onLoginClick(email, password)
        },
    })

    useEffect(() => {
        if (isAuth) {
            navigate('/profile', { replace: true })
        }
    }, [isAuth])

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundColor: (t) =>
                                t.palette.mode === 'light'
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {t('Вход')}
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={formik.handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword}
                                    id="password"
                                    autoComplete="current-password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword === 'password' ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.password && Boolean(formik.errors.password)
                                    }
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    {t('Войти')}
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link> */}
                                        <LangSwitcher />
                                    </Grid>

                                    <Grid item>
                                        <Link href="signUp" variant="body2">
                                            {t('Зарегистрироваться')}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            }
            off={<SignInFormDeprecated className={className} />}
        />
    )
}

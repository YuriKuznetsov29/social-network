import { getUserData } from '@/entities/UserData'
import { getLoadingAuthStatus } from '@/features/AuthByEmail/model/selectors/getLoadingAuthStatus/getLoadingAuthStatus'
import { changeUserData } from '@/features/AuthByEmail/model/services/changeUserData/changeUserData'
import { removeAvatar, uploadAvatar } from '@/features/UploadAvatar'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import HideImageIcon from '@mui/icons-material/HideImage'
import { LoadingButton } from '@mui/lab'
import { Box, Container, Grid, MenuItem, Select, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { ChangeProfile as ChangeProfileDeprecated } from '../../deprecated/ChangeProfile'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

export interface Values {
    firstName: string
    lastName: string
    email: string
    gender: 'male' | 'female' | ''
    birthDay: Dayjs
    city: string
}

export const ChangeProfile = () => {
    const { birthDay, email, firstName, lastName, gender, userId, avatarPath, city } =
        useAppSelector(getUserData)
    const loading = useAppSelector(getLoadingAuthStatus)
    const { t } = useTranslation('authForms')
    const dispatch = useAppDispatch()

    const onChangeLoadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file instanceof File) dispatch(uploadAvatar({ file, t }))
    }

    const onClickRemoveAvatar = () => {
        dispatch(removeAvatar(t))
    }

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
        city: Yup.string().trim().required(t('Введите город')),
        gender: Yup.string().required(t('Выберете значение')),
    })

    const formik = useFormik({
        initialValues: {
            firstName,
            lastName,
            email,
            birthDay: birthDay as unknown as Dayjs,
            gender,
            city,
        },
        validationSchema: validationSchema,
        onSubmit: (values: Values) => {
            const { firstName, lastName, email, gender, birthDay, city } = values
            dispatch(
                changeUserData({
                    firstName,
                    lastName,
                    email,
                    gender,
                    birthDay: birthDay as unknown as string,
                    userId,
                    city,
                    t,
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
                        <Box
                            component="form"
                            noValidate
                            onSubmit={formik.handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        data-testid="firstName"
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label={t('введите имя')}
                                        autoFocus
                                        value={formik.values.firstName}
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
                                        data-testid="lastName"
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
                                        data-testid="email"
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
                                        data-testid="city"
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
                                            data-testid="date"
                                            disableFuture
                                            sx={{ width: '100%' }}
                                            name="birthDay"
                                            label={t('Введите дату рождения')}
                                            value={dayjs(formik.values.birthDay)}
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
                                    >
                                        <MenuItem value="male">{t('мужчина')}</MenuItem>
                                        <MenuItem value="female">{t('женщина')}</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        fullWidth
                                        startIcon={<AddPhotoAlternateIcon />}
                                    >
                                        {t('Загрузить аватар')}
                                        <VisuallyHiddenInput
                                            type="file"
                                            onChange={(e) => onChangeLoadAvatar(e)}
                                        />
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<HideImageIcon />}
                                        onClick={onClickRemoveAvatar}
                                    >
                                        {t('Удалить аватар')}
                                    </Button>
                                </Grid>
                            </Grid>
                            <LoadingButton
                                data-testid="submit"
                                sx={{ mt: 3, mb: 2 }}
                                type="submit"
                                fullWidth
                                loading={loading}
                                loadingIndicator="Loading…"
                                variant="contained"
                            >
                                {t('Сохранить изменения')}
                            </LoadingButton>
                        </Box>
                    </Box>
                </Container>
            }
            off={<ChangeProfileDeprecated />}
        />
    )
}

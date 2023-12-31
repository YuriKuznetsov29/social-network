import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { RequestAuthData } from './signUpByEmail'
import { notificationsActions } from 'features/Notifications'
import { TFunction } from 'i18next'

export interface RequestChangeData {
    firstName: string
    lastName: string
    email: string
    gender: 'male' | 'female' | ''
    birthDay: string
    userId: string
    city: string
    t?: TFunction<'authForms', undefined>
}

export const changeUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>(
    'user/changeUserData',
    async (
        { firstName, lastName, email, gender, birthDay, userId, city, t },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const response = await $api.patch<AuthResponse>(`${API_URL}/user/${userId}/update`, {
                firstName,
                lastName,
                email,
                gender,
                birthDay,
                city,
            })

            if (t) {
                dispatch(notificationsActions.setNotification(t(`Вы успешно обновили данные`)))
            }
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

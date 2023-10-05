import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { RequestAuthData } from './signUpByEmail'
import { notificationsActions } from 'features/Notifications'

export interface RequestChangeData {
    firstName: string
    lastName: string
    email: string
    gender: 'male' | 'female' | ''
    birthDay: string
    userId: string
    city: string
}

export const changeUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>(
    'user/changeUserData',
    async (
        { firstName, lastName, email, gender, birthDay, userId, city },
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
            dispatch(notificationsActions.setNotification(`Вы успешно обновили данные`))
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../http/index'
import { RequestAuthData } from './signUpByEmail'

export interface RequestChangeData {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: 'male' | 'female'
    birthDay: string
    userId: string
}

export const changeUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>(
    'user/changeUserData',
    async ({ firstName, lastName, email, password, gender, birthDay, userId }) => {
        try {
            const response = await $api.patch<AuthResponse>(`${API_URL}/user/${userId}/update`, {
                firstName,
                lastName,
                email,
                password,
                gender,
                birthDay,
            })
            return response.data
        } catch (e: unknown) {
            console.log(e)
        }
    }
)

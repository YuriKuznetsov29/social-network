import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'

export interface RequestAuthData {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: 'male' | 'female' | ''
    birthDay: string
    city: string
}

export const signUpByEmail = createAsyncThunk<void, RequestAuthData, ThunkConfig<string>>(
    'login/signUp',
    async (
        { firstName, lastName, email, password, gender, birthDay, city },
        { dispatch, extra, rejectWithValue }
    ) => {
        try {
            await extra.api.post('/auth/signUp', {
                firstName,
                lastName,
                email,
                password,
                gender,
                birthDay,
                city,
            })
        } catch (e) {
            console.log(e)
            if (e instanceof AxiosError) {
                return e.response?.data.error.message
            }
        }
    }
)

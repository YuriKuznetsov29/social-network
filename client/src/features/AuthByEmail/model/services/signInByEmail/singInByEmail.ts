import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { loadUserData } from '@/entities/UserData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'

import { AuthResponse } from '../../types/response/AuthResponse'

interface RequestAuthData {
    email: string
    password: string
    navigate?: (path: string) => void
}

export const signInByEmail = createAsyncThunk<void, RequestAuthData, ThunkConfig<string>>(
    'login/signIn',
    async ({ email, password, navigate }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<AuthResponse>('/auth/signInWithPassword', {
                email,
                password,
            })

            localStorage.setItem('token', response.data.accessToken)
            dispatch(loadUserData({ userId: response.data.user.userId }))

            if (navigate) {
                navigate('/profile')
            }
        } catch (e) {
            console.log(e)
            if (isAxiosError(e) && e.response) {
                return rejectWithValue(e.response.data.error.message)
            } else {
                return rejectWithValue('error')
            }
        }
    }
)

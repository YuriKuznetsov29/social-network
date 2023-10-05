import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { AuthResponse } from '../types/response/AuthResponse'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { loadUserData, userDataActions } from 'entities/UserData'

interface RequestAuthData {
    email: string
    password: string
}

export const signInByEmail = createAsyncThunk<AuthResponse, RequestAuthData, ThunkConfig<string>>(
    'login/signIn',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<AuthResponse>(
                '/auth/signInWithPassword',
                authData
            )
            localStorage.setItem('token', response.data.accessToken)
            // dispatch(userDataActions.setUserData(response.data.user))
            dispatch(loadUserData({ userId: response.data.user.userId }))
            if (extra.navigate) {
                extra.navigate('/profile')
            }
            return response.data
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

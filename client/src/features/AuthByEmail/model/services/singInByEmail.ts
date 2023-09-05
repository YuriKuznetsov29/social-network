import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from './AuthService'
import { AxiosError } from 'axios'
import { IUser } from '../types/IUser'
import { AuthResponse } from '../types/response/AuthResponse'

interface RequestAuthData {
    email: string
    password: string
}

// <IUser, RequestAuthData, { rejectValue: string }>

export const signInByEmail = createAsyncThunk<
    AuthResponse,
    RequestAuthData,
    { rejectValue: string }
>('login/signIn', async ({ email, password }, thunkAPI) => {
    try {
        const response = await AuthService.signIn(email, password)
        localStorage.setItem('token', response.data.accessToken)
        return response.data
    } catch (e) {
        console.log(e)
        if (e instanceof AxiosError) {
            return e.response?.data.error.message
            // return thunkAPI.rejectWithValue(e.response?.data.error.message)
        }
    }
})

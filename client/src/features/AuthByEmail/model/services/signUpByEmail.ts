import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from './AuthService'
import { AxiosError } from 'axios'
import { IUser } from '../types/IUser'
import { AuthResponse } from '../types/response/AuthResponse'

export interface RequestAuthData {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: 'male' | 'female'
    birthDay: string
}

// <IUser, RequestAuthData, { rejectValue: string }>

export const signUpByEmail = createAsyncThunk<
    AuthResponse,
    RequestAuthData,
    { rejectValue: string }
>('login/signUp', async ({ firstName, lastName, email, password, gender, birthDay }, thunkAPI) => {
    try {
        const response = await AuthService.signUp({
            firstName,
            lastName,
            email,
            password,
            gender,
            birthDay,
        })
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

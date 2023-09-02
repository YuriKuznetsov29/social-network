import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from './AuthService'
import { AxiosError } from 'axios'
import { IUser } from 'models/IUser'

interface RequestAuthData {
    email: string
    password: string
}

// <IUser, RequestAuthData, { rejectValue: string }>

export const signUpByEmail = createAsyncThunk<IUser, RequestAuthData, { rejectValue: string }>(
    'login/signUp',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await AuthService.signUp(email, password)
            localStorage.setItem('token', response.data.accessToken)
            return response.data
        } catch (e) {
            console.log(e)
            if (e instanceof AxiosError) {
                return e.response?.data.error.message
                // return thunkAPI.rejectWithValue(e.response?.data.error.message)
            }
        }
    }
)

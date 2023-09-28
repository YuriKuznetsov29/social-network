import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from './AuthService'
import { AxiosError } from 'axios'
import { IUser } from '../../../../entities/UserData/model/types/IUser'
import { AuthResponse } from '../types/response/AuthResponse'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { userDataActions } from 'entities/UserData'

export interface RequestAuthData {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: 'male' | 'female' | ''
    birthDay: string
}

// <IUser, RequestAuthData, { rejectValue: string }>

export const signUpByEmail = createAsyncThunk<void, RequestAuthData, ThunkConfig<string>>(
    'login/signUp',
    async (
        { firstName, lastName, email, password, gender, birthDay },
        { dispatch, extra, rejectWithValue }
    ) => {
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
            dispatch(userDataActions.setUserData(response.data.user))
            // return response.data
        } catch (e) {
            console.log(e)
            if (e instanceof AxiosError) {
                return e.response?.data.error.message
                // return thunkAPI.rejectWithValue(e.response?.data.error.message)
            }
        }
    }
)

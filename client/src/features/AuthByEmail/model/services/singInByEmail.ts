import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from './AuthService'
import axios, { AxiosError } from 'axios'
import { IUser } from '../../../../entities/UserData/model/types/IUser'
import { AuthResponse } from '../types/response/AuthResponse'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { userDataActions } from 'entities/UserData'

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
            dispatch(userDataActions.setUserData(response.data.user))
            if (extra.navigate) {
                extra.navigate('/profile')
            }
            return response.data
        } catch (e) {
            console.log(e)
            // if (axios.isAxiosError(e) && e.response) {
            //     // return e.response?.data.error.message
            //     // return rejectWithValue(e.response.data.error.message)
            //     return rejectWithValue('error')
            // } else {
            //     return rejectWithValue('error')
            // }
            return rejectWithValue('error')
        }
    }
)

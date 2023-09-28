import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthResponse } from '../types/response/AuthResponse'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { userDataActions } from 'entities/UserData'

export const checkAuth = createAsyncThunk<void, void, ThunkConfig<string>>(
    'login/checkAuth',
    async (_, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<AuthResponse>(`auth/token`, {
                withCredentials: true,
            })
            localStorage.setItem('token', response.data.accessToken)
            dispatch(userDataActions.setUserData(response.data.user))
            // return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../../types/response/AuthResponse'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { loadUserData } from '@/entities/UserData'

export const checkAuth = createAsyncThunk<void, void, ThunkConfig<string>>(
    'login/checkAuth',
    async (_, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<AuthResponse>(`auth/token`, {
                withCredentials: true,
            })
            localStorage.setItem('token', response.data.accessToken)
            // dispatch(userDataActions.setUserData(response.data.user))
            dispatch(loadUserData({ userId: response.data.user.userId }))
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

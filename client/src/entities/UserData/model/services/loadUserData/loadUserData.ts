import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IUser } from '@/entities/UserData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'

interface RequestUserData {
    userId: string
}

export interface ResponseUserData {
    user: IUser
}

export const loadUserData = createAsyncThunk<
    ResponseUserData,
    RequestUserData,
    ThunkConfig<string>
>('user/loadUserData', async ({ userId }, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<ResponseUserData>(`/user/${userId}/initUser`)
        return response.data
    } catch (e) {
        console.log(e)
        if (isAxiosError(e) && e.response) {
            return rejectWithValue(e.response.data.error.message)
        } else {
            return rejectWithValue('error')
        }
    }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from '@/entities/UserData'

interface RequestUserData {
    userId: string
}

interface ResponseUserData {
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

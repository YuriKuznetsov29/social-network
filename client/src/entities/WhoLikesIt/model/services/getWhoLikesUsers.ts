import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IUser } from '@/entities/UserData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'

interface ResponseUserData {
    users: IUser[]
}

export const getWhoLikesUsers = createAsyncThunk<ResponseUserData, string, ThunkConfig<string>>(
    'likes/getWhoLikesUsers',
    async (postId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<ResponseUserData>(
                `/post/getWhoLikesUsers/${postId}`
            )

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

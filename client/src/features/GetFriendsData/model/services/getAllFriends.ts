import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'

export type Response = IUser[]

interface RequestData {
    userId: string
    limit?: number
    page?: number
    noLimit?: boolean
}

export const getAllFriends = createAsyncThunk<Response, string, ThunkConfig<string>>(
    'user/getAllFriends',
    async (userId, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Response>(
                `${API_URL}/user/${userId}/getAllFriends`
            )

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

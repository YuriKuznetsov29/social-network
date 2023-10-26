import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { IUser } from 'entities/UserData/model/types/IUser'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'

export interface Response {
    friends: IUser[]
}

export const getAllFriends = createAsyncThunk<Response, string, ThunkConfig<string>>(
    'user/getAllFriends',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await $api.get<Response>(`${API_URL}/user/${userId}/getAllFriends`)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

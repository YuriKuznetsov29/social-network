import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { IUser } from 'entities/UserData/model/types/IUser'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'

export interface RequestData {
    userId: string
}

export interface Response {
    users: IUser[]
}

export const getConversationUsers = createAsyncThunk<Response, RequestData, ThunkConfig<string>>(
    'messenger/getConversationUsers',
    async ({ userId }, { rejectWithValue }) => {
        try {
            const response = await $api.get<Response>(
                `${API_URL}/user/${userId}/getConversationUsers`
            )
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

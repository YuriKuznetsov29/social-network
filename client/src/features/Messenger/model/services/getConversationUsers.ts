import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { IUser } from 'features/AuthByEmail/model/types/IUser'

export interface RequestData {
    userId: string
}

export interface Response {
    users: IUser[]
}

export const getConversationUsers = createAsyncThunk<
    Response,
    RequestData,
    { rejectValue: string }
>('messenger/getConversationUsers', async ({ userId }) => {
    try {
        const response = await $api.get<Response>(`${API_URL}/user/${userId}/getConversationUsers`)
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

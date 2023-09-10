import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../http/index'

export interface RequestChangeData {
    userId: string
    friendId: string
    roomId: string
}

export const addConversation = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>('user/addConversation', async ({ userId, friendId, roomId }) => {
    try {
        const response = await $api.patch<AuthResponse>(
            `${API_URL}/user/${userId}/addConversation`,
            {
                roomId,
                friendId,
            }
        )
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

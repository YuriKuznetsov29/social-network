import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../http/index'

export interface RequestChangeData {
    userId: string
    friendId: string
}

export const removeFriend = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>('user/removeFriend', async ({ userId, friendId }) => {
    try {
        const response = await $api.patch<AuthResponse>(`${API_URL}/user/${userId}/removeFriend`, {
            friendId,
        })
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../http/index'

export interface RequestChangeData {
    userId: string
    friendId: string
}

export const addFriend = createAsyncThunk<AuthResponse, RequestChangeData, { rejectValue: string }>(
    'user/addFriend',
    async ({ userId, friendId }) => {
        try {
            const response = await $api.patch<AuthResponse>(`${API_URL}/user/${userId}/addFriend`, {
                friendId,
            })
            return response.data
        } catch (e: unknown) {
            console.log(e)
        }
    }
)

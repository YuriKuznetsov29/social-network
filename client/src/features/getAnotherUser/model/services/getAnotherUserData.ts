import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { AuthResponse } from 'features/AuthByEmail/model/types/response/AuthResponse'

export interface RequestChangeData {
    userId: string
}

export const getAnotherUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>('user/anotherUserData', async ({ userId }) => {
    try {
        const response = await $api.get<AuthResponse>(`${API_URL}/user/${userId}`)
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

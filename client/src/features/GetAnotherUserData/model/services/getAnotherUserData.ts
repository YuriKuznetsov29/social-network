import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from 'features/AuthByEmail/model/types/response/AuthResponse'
import $api, { API_URL } from '../../../../shared/api/http'

export interface RequestChangeData {
    userId: string
}

export const getAnotherUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    { rejectValue: string }
>('user/anotherUserData', async ({ userId }, { rejectWithValue }) => {
    try {
        const response = await $api.get<AuthResponse>(`${API_URL}/user/${userId}`)
        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { AuthResponse } from '@/features/AuthByEmail/model/types/response/AuthResponse'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { API_URL } from '../../../../shared/api/http'

export interface RequestChangeData {
    userId: string
}

export const getAnotherUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    ThunkConfig<string>
>('user/anotherUserData', async ({ userId }, { rejectWithValue, extra }) => {
    try {
        const response = await extra.api.get<AuthResponse>(`${API_URL}/user/${userId}`)
        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

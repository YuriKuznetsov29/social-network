import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api from '../../../../http/index'

export const removeAvatar = createAsyncThunk('file/removeAvatar', async () => {
    try {
        const response = await $api.delete<AuthResponse>(
            `http://localhost:8080/api/file/removeAvatar`,
            {
                withCredentials: true,
            }
        )

        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api from '../../../../http/index'

export const uploadAvatar = createAsyncThunk('file/uploadAvatar', async (file: string | Blob) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
        const response = await $api.post<AuthResponse>(
            `http://localhost:8080/api/file/uploadAvatar`,
            formData
        )

        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

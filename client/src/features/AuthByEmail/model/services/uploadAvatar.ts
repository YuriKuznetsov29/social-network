import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthResponse } from '../types/response/AuthResponse'

export const uploadAvatar = createAsyncThunk('file/uploadAvatar', async (file: string | Blob) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
        const response = await axios.post<AuthResponse>(
            `http://localhost:8080/api/file/uploadAvatar`,
            formData,
            {
                withCredentials: true,
            }
        )

        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthResponse } from '../types/response/AuthResponse'

export const checkAuth = createAsyncThunk('login/checkAuth', async () => {
    try {
        const response = await axios.get<AuthResponse>(`http://localhost:8080/api/auth/token`, {
            withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

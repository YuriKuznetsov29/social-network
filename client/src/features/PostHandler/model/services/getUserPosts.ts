import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'

interface RequestData {
    author: string
}

export const getUserPosts = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    { rejectValue: string }
>('post/getUserPosts', async ({ author }, { rejectWithValue }) => {
    try {
        const response = await $api.post<PostHandlerResponse>(`${API_URL}/post/getUserPosts`, {
            author,
        })
        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

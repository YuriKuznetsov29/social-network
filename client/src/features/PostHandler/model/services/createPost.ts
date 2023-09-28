import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'

interface RequestData {
    author: string
    text: string
    imagePath: string
}

export const createPost = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    { rejectValue: string }
>('post/createPost', async ({ author, text, imagePath }, { rejectWithValue }) => {
    try {
        const response = await $api.post<PostHandlerResponse>(`${API_URL}/post/createPost`, {
            author,
            text,
            imagePath,
        })
        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'

interface RequestData {
    author: string
}

export const getUserPosts = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    { rejectValue: string }
>('post/getUserPosts', async ({ author }) => {
    try {
        const response = await $api.post<PostHandlerResponse>(`${API_URL}/post/getUserPosts`, {
            author,
        })
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

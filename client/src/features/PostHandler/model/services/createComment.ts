import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'
import { IComment } from '../types/comment'

interface RequestData {
    author: string
    body: string
    postId: string
}

export const createComment = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    { rejectValue: string }
>('post/createComment', async ({ author, body, postId }) => {
    try {
        const response = await $api.post<PostHandlerResponse>(`${API_URL}/post/createComment`, {
            author,
            body,
            postId,
        })
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

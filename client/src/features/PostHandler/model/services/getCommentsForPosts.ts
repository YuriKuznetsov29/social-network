import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'
import { IComment } from '../types/comment'

interface RequestData {
    comments: string[]
}

interface ResponseData {
    comments: IComment[]
}

export const getCommentsForPost = createAsyncThunk<
    ResponseData,
    RequestData,
    { rejectValue: string }
>('post/getCommentsForPost', async ({ comments }) => {
    try {
        const response = await $api.post<ResponseData>(`${API_URL}/post/getCommentsForPost`, {
            comments,
        })
        return response.data
    } catch (e: unknown) {
        console.log(e)
    }
})

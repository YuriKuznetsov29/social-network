import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'
import { notificationsActions } from 'features/Notifications'

interface RequestData {
    author: string
    text: string
    imagePath: string
}

export const createPost = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    { rejectValue: string }
>('post/createPost', async ({ author, text, imagePath }, { rejectWithValue, dispatch }) => {
    try {
        const response = await $api.post<PostHandlerResponse>(`${API_URL}/post/createPost`, {
            author,
            text,
            imagePath,
        })

        dispatch(notificationsActions.setNotification(`Вы опубликовали новую запись`))
        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

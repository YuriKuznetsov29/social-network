import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'
import { notificationsActions } from 'features/Notifications'
import { TFunction } from 'i18next'

interface RequestData {
    author: string
    text: string
    imagePath: string
    t?: TFunction<'pages', undefined>
}

export const createPost = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    { rejectValue: string }
>('post/createPost', async ({ author, text, imagePath, t }, { rejectWithValue, dispatch }) => {
    try {
        const response = await $api.post<PostHandlerResponse>(`${API_URL}/post/createPost`, {
            author,
            text,
            imagePath,
        })

        if (t) {
            dispatch(notificationsActions.setNotification(t(`Вы опубликовали новую запись`)))
        }

        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

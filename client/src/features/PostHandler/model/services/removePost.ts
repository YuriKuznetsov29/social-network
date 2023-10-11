import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'
import { notificationsActions } from 'features/Notifications'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'

interface RequestData {
    postId: string
}

export const removePost = createAsyncThunk<PostHandlerResponse, RequestData, ThunkConfig<string>>(
    'post/removePost',
    async ({ postId }, { rejectWithValue, dispatch, extra }) => {
        try {
            const response = await extra.api.post(`${API_URL}/post/removePost`, {
                postId,
            })

            dispatch(notificationsActions.setNotification(`Пост успешно удален`))
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

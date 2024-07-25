import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { PostHandlerResponse } from '../types/postHandlerResponse'
import { getPostsPage } from '../selectors/getPostsPage'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { postHandlerActions } from '../slice/postHandlerSlice'

interface RequestData {
    author: string
}

export const fetchUserPosts = createAsyncThunk<
    PostHandlerResponse,
    RequestData,
    ThunkConfig<string>
>('post/fetchUserPosts', async ({ author }, { rejectWithValue, dispatch, getState }) => {
    const page = getPostsPage(getState())

    try {
        const response = await $api.get<PostHandlerResponse>(`${API_URL}/post/getUserPosts`, {
            params: {
                author,
                page: page + 1,
                limit: 3,
            },
        })
        dispatch(postHandlerActions.setPage(page + 1))

        return response.data
    } catch (e: unknown) {
        console.log(e)
        return rejectWithValue('error')
    }
})

import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IPost } from '@/features/PostHandler'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'

import { getNewsPage } from '../selectors/getNewsPage'
import { newsActions } from '../slice/newsSlice'

interface RequestUserData {
    friendList: string[]
}

interface ResponseUserData {
    news: IPost[]
    hasMore: boolean
}

export const fetchNews = createAsyncThunk<ResponseUserData, RequestUserData, ThunkConfig<string>>(
    'news/fetchNews',
    async ({ friendList }, { extra, rejectWithValue, getState, dispatch }) => {
        const page = getNewsPage(getState())

        try {
            const response = await extra.api.get<ResponseUserData>(`/post/getNews`, {
                params: { usersList: friendList, page: page + 1, limit: 3 },
            })

            dispatch(newsActions.setPage(page + 1))

            return response.data
        } catch (e) {
            console.log(e)
            if (isAxiosError(e) && e.response) {
                return rejectWithValue(e.response.data.error.message)
            } else {
                return rejectWithValue('error')
            }
        }
    }
)

// export const fetchUserPosts = createAsyncThunk<
//     PostHandlerResponse,
//     RequestData,
//     ThunkConfig<string>
// >('post/fetchUserPosts', async ({ author }, { rejectWithValue, dispatch, getState }) => {
//     const page = getPostsPage(getState())

//     try {
//         const response = await $api.get<PostHandlerResponse>(`${API_URL}/post/getUserPosts`, {
//             params: {
//                 author,
//                 page: page + 1,
//                 limit: 3,
//             },
//         })
//         dispatch(postHandlerActions.setPage(page + 1))

//         return response.data
//     } catch (e: unknown) {
//         console.log(e)
//         return rejectWithValue('error')
//     }
// })

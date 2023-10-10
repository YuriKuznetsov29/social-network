import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IPost } from 'features/PostHandler'

interface RequestUserData {
    friendList: string[]
}

interface ResponseUserData {
    posts: IPost[]
}

export const getNews = createAsyncThunk<ResponseUserData, RequestUserData, ThunkConfig<string>>(
    'news/getNews',
    async ({ friendList }, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<ResponseUserData>(`/post/getNews`, {
                usersList: friendList,
            })

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

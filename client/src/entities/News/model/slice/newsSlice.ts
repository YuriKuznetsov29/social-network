import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NewsSchema } from '../types/newsSchema'
import { IPost } from 'features/PostHandler'
import { getNews } from '../services/getNews'

const initialState: NewsSchema = {
    news: [] as IPost[],
    isLoading: false,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNews.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getNews.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.news = action.payload.posts
            })
    },
})

export const { actions: newsActions, reducer: newsReducer } = newsSlice

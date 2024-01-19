import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NewsSchema } from '../types/newsSchema'
import { IPost } from 'features/PostHandler'
import { fetchNews } from '../services/fetchNews'

const initialState: NewsSchema = {
    news: [] as IPost[],
    isLoading: false,
    hasMore: false,
    page: 0,
    _initialized: false,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.news = action.payload.news
                state.hasMore = action.payload.hasMore
                state._initialized = true
            })
    },
})

export const { actions: newsActions, reducer: newsReducer } = newsSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { createPost } from '../services/createPost'
import { fetchUserPosts } from '../services/fetchUserPosts'
import { removePost } from '../services/removePost'
// import { createComment } from '../services/createComment'
import { IComment } from '../types/comment'
import { IPost } from '../types/post'
import { PostHandlerSchema } from '../types/postHandlerSchema'
// import { getCommentsForPost } from '../services/getCommentsForPosts'

export interface signInState {
    value: number
}

const initialState: PostHandlerSchema = {
    isLoading: false,
    comments: [] as IComment[],
    posts: [] as IPost[],
    page: 0,
    hasMore: false,
    _initialized: false,
}

export const postHandlerSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(removePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removePost.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(removePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts = action.payload.posts
            })
            .addCase(createPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts = action.payload.posts
            })
            .addCase(fetchUserPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUserPosts.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(fetchUserPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state._initialized = true
                state.posts = action.payload.posts
                state.hasMore = action.payload.hasMore
            })
    },
})

export const { actions: postHandlerActions, reducer: postHandlerReducer } = postHandlerSlice

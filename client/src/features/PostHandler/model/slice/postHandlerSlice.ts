import { createSlice } from '@reduxjs/toolkit'
import { PostHandlerSchema } from '../types/postHandlerSchema'
import { IPost } from '../types/post'
import { createPost } from '../services/createPost'
import { getUserPosts } from '../services/getUserPosts'
// import { createComment } from '../services/createComment'
import { IComment } from '../types/comment'
import { removePost } from '../services/removePost'
// import { getCommentsForPost } from '../services/getCommentsForPosts'

export interface signInState {
    value: number
}

const initialState: PostHandlerSchema = {
    isLoading: false,
    comments: [] as IComment[],
    posts: [] as IPost[],
    _initialized: false,
}

export const postHandlerSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
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
            .addCase(getUserPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserPosts.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(getUserPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state._initialized = true
                state.posts = action.payload.posts
            })
    },
})

export const { actions: postHandlerActions, reducer: postHandlerReducer } = postHandlerSlice

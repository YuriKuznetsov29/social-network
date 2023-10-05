import { createSlice } from '@reduxjs/toolkit'
import { PostHandlerSchema } from '../types/postHandlerSchema'
import { IPost } from '../types/post'
import { createPost } from '../services/createPost'
import { getUserPosts } from '../services/getUserPosts'
// import { createComment } from '../services/createComment'
import { IComment } from '../types/comment'
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
            .addCase(createPost.fulfilled, (state, action) => {
                if (action.payload?.posts) {
                    state.posts = action.payload.posts
                }
            })
            .addCase(getUserPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserPosts.rejected, (state, action) => {
                state.isLoading = false
            })
            .addCase(getUserPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state._initialized = true
                if (action.payload?.posts) {
                    state.posts = action.payload.posts
                }
            })
        // .addCase(createComment.fulfilled, (state, action) => {
        //     if (action.payload?.posts) {
        //         state.posts = action.payload.posts
        //     }
        // })
        // .addCase(getCommentsForPost.fulfilled, (state, action) => {
        //     if (action.payload?.comments) {
        //         // state.comments = action.payload.comments
        //     }
        // })
    },
})

export const { actions: postHandlerActions, reducer: postHandlerReducer } = postHandlerSlice

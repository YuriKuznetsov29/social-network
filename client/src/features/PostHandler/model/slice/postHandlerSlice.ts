import { createSlice } from '@reduxjs/toolkit'
import { PostHandlerSchema } from '../types/postHandlerSchema'
import { IPost } from '../types/post'
import { createPost } from '../services/createPost'
import { getUserPosts } from '../services/getUserPosts'
import { createComment } from '../services/createComment'
import { IComment } from '../types/comment'
import { getCommentsForPost } from '../services/getCommentsForPosts'

export interface signInState {
    value: number
}

const initialState: PostHandlerSchema = {
    comments: [] as IComment[],
    posts: [] as IPost[],
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
            .addCase(getUserPosts.fulfilled, (state, action) => {
                if (action.payload?.posts) {
                    state.posts = action.payload.posts
                }
            })
            .addCase(createComment.fulfilled, (state, action) => {
                if (action.payload?.posts) {
                    state.posts = action.payload.posts
                }
            })
            .addCase(getCommentsForPost.fulfilled, (state, action) => {
                if (action.payload?.comments) {
                    state.comments = action.payload.comments
                }
            })
    },
})

export const { actions: postHandlerActions, reducer: postHandlerReducer } = postHandlerSlice

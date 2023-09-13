import { createSlice } from '@reduxjs/toolkit'
import { PostHandlerSchema } from '../types/postHandlerSchema'
import { IPost } from '../types/post'
import { createPost } from '../services/createPost'
import { getUserPosts } from '../services/getUserPosts'

export interface signInState {
    value: number
}

const initialState: PostHandlerSchema = {
    posts: [] as IPost[],
}

export const postHandlerSlice = createSlice({
    name: 'messenger',
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
    },
})

export const { actions: postHandlerActions, reducer: postHandlerReducer } = postHandlerSlice

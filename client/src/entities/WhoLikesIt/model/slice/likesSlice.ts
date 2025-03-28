import { IUser } from '@/entities/UserData'
import { createSlice } from '@reduxjs/toolkit'

import { getWhoLikesUsers } from '../services/getWhoLikesUsers'
import { LikesSchema } from '../types/likesSchema'

const initialState: LikesSchema = {
    users: [] as IUser[],
    isLoading: false,
}

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWhoLikesUsers.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getWhoLikesUsers.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(getWhoLikesUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.users = action.payload.users
            })
    },
})

export const { actions: likesActions, reducer: likesReducer } = likesSlice

import { createSlice } from '@reduxjs/toolkit'
import { FriendsSchema } from '../types/friendSchema'
import { IUser } from 'entities/UserData/model/types/IUser'
import { getAllFriends } from '../services/getAllFriends'

export interface signInState {
    value: number
}

const initialState: FriendsSchema = {
    error: '',
    isLoading: false,
    friends: [] as IUser[],
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllFriends.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(getAllFriends.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload?.friends) {
                    state.friends = action.payload.friends
                }
            })
            .addCase(getAllFriends.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: friendsActions, reducer: friendsReducer } = friendSlice

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
    _initialized: false,
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
                state._initialized = true
                state.friends = action.payload
            })
            .addCase(getAllFriends.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: friendsActions, reducer: friendsReducer } = friendSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { AnotherUserSchema } from '../types/anotherUserSchema'
import { getAnotherUserData } from '../services/getAnotherUserData'

export interface signInState {
    value: number
}

const initialState: AnotherUserSchema = {
    isLoading: false,
    error: '',
    userData: {} as IUser,
}

export const anotherUserSlice = createSlice({
    name: 'anotherUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAnotherUserData.pending, (state) => {
                state.error = undefined
            })
            .addCase(getAnotherUserData.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload?.user) {
                    state.userData = action.payload.user
                }
            })
            .addCase(getAnotherUserData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: anotherUserActions, reducer: anotherUserReducer } = anotherUserSlice

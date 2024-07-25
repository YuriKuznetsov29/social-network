import { IUser } from '@/entities/UserData/model/types/IUser'
import { createSlice } from '@reduxjs/toolkit'
import { getAnotherUserData } from '../services/getAnotherUserData'
import { AnotherUserSchema } from '../types/anotherUserSchema'

export interface signInState {
    value: number
}

const initialState: AnotherUserSchema = {
    isLoading: false,
    error: '',
    userData: {} as IUser,
    _initialized: false,
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
                state._initialized = true
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

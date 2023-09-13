import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { MessengerSchema } from '../types/messengerSchema'
import { getConversationUsers } from '../services/getConversationUsers'

export interface signInState {
    value: number
}

const initialState: MessengerSchema = {
    users: [] as IUser[],
}

export const messengerSlice = createSlice({
    name: 'messenger',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getConversationUsers.fulfilled, (state, action) => {
            if (action.payload?.users) {
                state.users = action.payload.users
            }
        })
    },
})

export const { actions: messengerActions, reducer: messengerReducer } = messengerSlice

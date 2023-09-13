import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { MessengerSchema } from '../types/messengerSchema'
import { getConversationUsers } from '../services/getConversationUsers'
import { getLastMessage } from '../services/getLastMessage'
import { MessageData } from 'widgets/Dialog/model/useChat'

export interface signInState {
    value: number
}

const initialState: MessengerSchema = {
    lastMessage: {} as MessageData,
    users: [] as IUser[],
}

export const messengerSlice = createSlice({
    name: 'messenger',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getConversationUsers.fulfilled, (state, action) => {
                if (action.payload?.users) {
                    state.users = action.payload.users
                }
            })
            .addCase(getLastMessage.fulfilled, (state, action) => {
                if (action.payload?.message) {
                    state.lastMessage = action.payload.message
                }
            })
    },
})

export const { actions: messengerActions, reducer: messengerReducer } = messengerSlice

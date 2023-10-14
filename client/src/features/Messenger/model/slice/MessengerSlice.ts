import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'entities/UserData/model/types/IUser'
import { MessengerSchema } from '../types/messengerSchema'
import { getConversationUsers } from '../services/getConversationUsers'
import { getLastMessage } from '../services/getLastMessage'
import { MessageData } from 'shared/lib/hook/useChat'
import { getDialogs } from '../services/getDialogs'
import { Dialog } from '../types/dialog'
import { ICompanion } from '../types/companion'
import { IMessage } from '../types/message'

export interface signInState {
    value: number
}

const initialState: MessengerSchema = {
    dialogs: [] as Dialog[],
    isLoading: false,
}

export const messengerSlice = createSlice({
    name: 'messenger',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDialogs.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getDialogs.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(getDialogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.dialogs = action.payload.dialogs
            })
    },
})

export const { actions: messengerActions, reducer: messengerReducer } = messengerSlice

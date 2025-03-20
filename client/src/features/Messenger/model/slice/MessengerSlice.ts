import { StateSchema } from '@/app/Providers/StoreProvider'
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { fetchDialogs } from '../services/fetchDialogs'
import { Dialog } from '../types/dialog'
import { MessengerSchema } from '../types/messengerSchema'

const messengerAdapter = createEntityAdapter<Dialog>({
    selectId: (dialog) => dialog.id,
})

export const getDialogs = messengerAdapter.getSelectors<StateSchema>(
    (state) => state.messenger || messengerAdapter.getInitialState()
)

export const messengerSlice = createSlice({
    name: 'messenger',
    initialState: messengerAdapter.getInitialState<MessengerSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDialogs.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchDialogs.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchDialogs.fulfilled, (state, action: PayloadAction<Dialog[]>) => {
                state.isLoading = false
                messengerAdapter.setAll(state, action.payload)
            })
    },
})

export const { actions: messengerActions, reducer: messengerReducer } = messengerSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NotificationsSchema } from '../types/notiticationsSchema'

export interface signInState {
    value: number
}

const initialState: NotificationsSchema = {
    notification: '',
}

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotification: (state, action: PayloadAction<string>) => {
            state.notification = action.payload
        },
    },
    extraReducers: (builder) => {},
})

export const { actions: notificationsActions, reducer: notificationsReducer } = notificationsSlice

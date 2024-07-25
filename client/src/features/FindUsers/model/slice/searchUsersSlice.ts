import { IUser } from '@/entities/UserData/model/types/IUser'
import { SearchUsersSchema } from '../type/searchUsersSchema'
import { createSlice } from '@reduxjs/toolkit'
import { findUsers } from '../services/findUsers'

export interface signInState {
    value: number
}

const initialState: SearchUsersSchema = {
    firstName: '',
    lastName: '',
    isLoading: false,
    users: [] as IUser[],
}

export const searchUsersSlice = createSlice({
    name: 'searchUsersSlice',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(findUsers.fulfilled, (state, action) => {
            state.isLoading = false
            if (action.payload?.users) {
                state.users = action.payload.users
            }
        })
    },
})

export const { actions: searchUsersActions, reducer: searchUsersReducer } = searchUsersSlice

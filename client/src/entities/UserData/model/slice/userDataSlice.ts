import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../../entities/UserData/model/types/IUser'
import { UserDataSchema } from '../types/userDataSchema'
import { loadUserData } from '../services/loadUserData'

const initialState: UserDataSchema = {
    userData: {} as IUser,
    _initialized: false,
    isLoading: false,
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.userData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUserData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(loadUserData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loadUserData.fulfilled, (state, action) => {
                state.isLoading = false
                state._initialized = true
                if (action.payload?.user) {
                    state.userData = action.payload.user
                }
            })
    },
})

export const { actions: userDataActions, reducer: userDataReducer } = userDataSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../../entities/UserData/model/types/IUser'
import { UserDataSchema } from '../types/userDataSchema'

const initialState: UserDataSchema = {
    userData: {} as IUser,
}

export const userDataSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.userData = action.payload
        },
    },
    extraReducers: (builder) => {},
})

export const { actions: userDataActions, reducer: userDataReducer } = userDataSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { signInByEmail } from '../services/singInByEmail'
import { AuthSchema } from '../types/authSchema'
import { signUpByEmail } from '../services/signUpByEmail'

export interface signInState {
    value: number
}

const initialState: AuthSchema = {
    isLoading: false,
    email: '',
    password: '',
}

export const authSlice = createSlice({
    name: 'autorization',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInByEmail.pending, (state) => {
                state.error = undefined
            })
            .addCase(signInByEmail.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(signInByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(signUpByEmail.pending, (state) => {
                state.error = undefined
            })
            .addCase(signUpByEmail.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(signUpByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: authActions, reducer: authReducer } = authSlice
// export const { reducer: authReducer } = authSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { signInByEmail } from '../services/singInByEmail'
import { AuthSchema } from '../types/authSchema'
import { signUpByEmail } from '../services/signUpByEmail'
import { checkAuth } from '../services/checkAuth'
import { signOut } from '../services/signOut'

export interface signInState {
    value: number
}

const initialState: AuthSchema = {
    isLoading: false,
    initAuth: false,
    isAuth: false,
    email: '',
    password: '',
    regSuccess: false,
}

export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setInit: (state) => {
            state.initAuth = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInByEmail.pending, (state) => {
                state.initAuth = true
                state.isLoading = true
                state.error = undefined
            })
            .addCase(signInByEmail.fulfilled, (state) => {
                state.isLoading = false
                state.isAuth = true
            })
            .addCase(signInByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(signUpByEmail.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(signUpByEmail.fulfilled, (state) => {
                state.error = ''
                state.regSuccess = true
                state.isLoading = false
            })
            .addCase(signUpByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true
                state.initAuth = true
                state.error = undefined
            })
            .addCase(checkAuth.fulfilled, (state) => {
                state.isLoading = false
                state.isAuth = true
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(signOut.fulfilled, (state) => {
                state.isAuth = false
                state.initAuth = false
            })
    },
})

export const { actions: authActions, reducer: authReducer } = authSlice

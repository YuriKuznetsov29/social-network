import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { signInByEmail } from '../services/singInByEmail'
import { AuthSchema } from '../types/authSchema'
import { signUpByEmail } from '../services/signUpByEmail'
import { checkAuth } from '../services/checkAuth'
import { signOut } from '../services/signOut'
import { IUser } from '../types/IUser'

export interface signInState {
    value: number
}

const initialState: AuthSchema = {
    isLoading: false,
    isAuth: false,
    email: '',
    password: '',
    userData: {} as IUser,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInByEmail.pending, (state) => {
                state.error = undefined
            })
            .addCase(signInByEmail.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload?.user) {
                    state.userData = action.payload.user
                    state.isAuth = true
                } else {
                    state.isAuth = false
                }
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

                if (action.payload?.user) {
                    state.userData = action.payload.user
                    state.isAuth = true
                } else {
                    state.isAuth = false
                }
            })
            .addCase(signUpByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(checkAuth.pending, (state) => {
                state.error = undefined
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload?.user) {
                    state.userData = action.payload.user
                    state.isAuth = true
                }
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false
                // state.error = action.payload
            })
            .addCase(signOut.fulfilled, (state) => {
                state.isAuth = false
            })
    },
})

export const { actions: authActions, reducer: authReducer } = authSlice
// export const { reducer: authReducer } = authSlice

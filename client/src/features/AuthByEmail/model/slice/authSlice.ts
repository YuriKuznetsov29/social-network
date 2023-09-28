import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { signInByEmail } from '../services/singInByEmail'
import { AuthSchema } from '../types/authSchema'
import { signUpByEmail } from '../services/signUpByEmail'
import { checkAuth } from '../services/checkAuth'
import { signOut } from '../services/signOut'
import { IUser } from '../../../../entities/UserData/model/types/IUser'
import { uploadAvatar } from '../services/uploadAvatar'
import { removeAvatar } from '../services/removeAvatar'
import { addFriend } from '../services/addFriend'
import { removeFriend } from '../services/removeFriend'
import { addConversation } from '../services/addConversation'

export interface signInState {
    value: number
}

const initialState: AuthSchema = {
    isLoading: false,
    isAuth: false,
    email: '',
    password: '',
    // userData: {} as IUser,
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
                    // state.userData = action.payload.user
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

                // if (action.payload?.user) {
                // state.userData = action.payload.user
                state.isAuth = true
                // } else {
                //     state.isAuth = false
                // }
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
                // if (action.payload?.user) {
                //     state.userData = action.payload.user
                state.isAuth = true
                // }
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false
                // state.error = action.payload
            })
            .addCase(signOut.fulfilled, (state) => {
                state.isAuth = false
            })
            .addCase(uploadAvatar.fulfilled, (state, action) => {
                // if (action.payload?.user) {
                //     state.userData = action.payload.user
                // }
            })
            .addCase(removeAvatar.fulfilled, (state, action) => {
                // if (action.payload?.user) {
                //     // state.userData = action.payload.user
                // }
            })
            .addCase(addFriend.fulfilled, (state, action) => {
                // if (action.payload?.user) {
                //     state.userData = action.payload.user
                // }
            })
            .addCase(removeFriend.fulfilled, (state, action) => {
                // if (action.payload?.user) {
                //     state.userData = action.payload.user
                // }
            })
            .addCase(addConversation.fulfilled, (state, action) => {
                // if (action.payload?.user) {
                //     state.userData = action.payload.user
                // }
            })
    },
})

export const { actions: authActions, reducer: authReducer } = authSlice

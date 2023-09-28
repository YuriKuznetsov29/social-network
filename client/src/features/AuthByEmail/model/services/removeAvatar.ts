import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api from '../../../../shared/api/http/index'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { userDataActions } from 'entities/UserData'

export const removeAvatar = createAsyncThunk<void, void, ThunkConfig<string>>(
    'file/removeAvatar',
    async (_, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.delete<AuthResponse>(
                `http://localhost:8080/api/file/removeAvatar`
            )

            dispatch(userDataActions.setUserData(response.data.user))
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

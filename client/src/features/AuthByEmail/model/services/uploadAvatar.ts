import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api from '../../../../shared/api/http/index'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { userDataActions } from 'entities/UserData'

export const uploadAvatar = createAsyncThunk<void, string | Blob, ThunkConfig<string>>(
    'file/uploadAvatar',
    async (file: string | Blob, { dispatch, extra, rejectWithValue }) => {
        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await extra.api.post<AuthResponse>(`/file/uploadAvatar`, formData)
            dispatch(userDataActions.setUserData(response.data.user))
            // return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

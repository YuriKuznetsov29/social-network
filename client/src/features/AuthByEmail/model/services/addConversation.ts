import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { userDataActions } from 'entities/UserData'

export interface RequestChangeData {
    userId: string
    friendId: string
    roomId: string
}

export const addConversation = createAsyncThunk<void, RequestChangeData, ThunkConfig<string>>(
    'user/addConversation',
    async ({ userId, friendId, roomId }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.patch<AuthResponse>(
                `${API_URL}/user/${userId}/addConversation`,
                {
                    roomId,
                    friendId,
                }
            )
            dispatch(userDataActions.setUserData(response.data.user))
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

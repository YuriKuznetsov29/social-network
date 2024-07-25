import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from '@/entities/UserData'

export interface RequestChangeData {
    userId: string
    friendId: string
    roomId: string
    navigate: (path: string) => void
}

export interface ResponseData {
    user: IUser
}

export const addConversation = createAsyncThunk<void, RequestChangeData, ThunkConfig<string>>(
    'user/addConversation',
    async ({ userId, friendId, roomId, navigate }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.patch<ResponseData>(
                `${API_URL}/user/${userId}/addConversation`,
                {
                    roomId,
                    friendId,
                }
            )
            dispatch(userDataActions.setUserData(response.data.user))
            navigate(`/messenger/${roomId}`)
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

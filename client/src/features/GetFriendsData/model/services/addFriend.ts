import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../../../shared/api/http/index'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'

export interface RequestChangeData {
    userId: string
    friendId: string
    friendFirstName: string
    friendLastName: string
}

export interface ResponseData {
    user: IUser
}

export const addFriend = createAsyncThunk<void, RequestChangeData, ThunkConfig<string>>(
    'user/addFriend',
    async (
        { userId, friendId, friendLastName, friendFirstName },
        { dispatch, extra, rejectWithValue }
    ) => {
        try {
            const response = await extra.api.patch<ResponseData>(
                `${API_URL}/user/${userId}/addFriend`,
                {
                    friendId,
                }
            )
            dispatch(userDataActions.setUserData(response.data.user))
            dispatch(
                notificationsActions.setNotification(
                    `Вы добавили пользователя ${friendFirstName} ${friendLastName} в друзья`
                )
            )
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

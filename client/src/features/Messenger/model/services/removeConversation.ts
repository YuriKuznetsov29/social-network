import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'
import { TFunction } from 'i18next'

export interface RequestChangeData {
    userId: string
    companionId: string
    roomId: string
    t?: TFunction<'pages', undefined>
}

export interface ResponseData {
    user: IUser
}

export const removeConversation = createAsyncThunk<void, RequestChangeData, ThunkConfig<string>>(
    'user/removeConversation',
    async ({ userId, companionId, roomId, t }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.patch<ResponseData>(
                `/user/${userId}/removeConversation`,
                {
                    roomId,
                    companionId,
                }
            )
            dispatch(userDataActions.setUserData(response.data.user))
            if (t) {
                dispatch(notificationsActions.setNotification(t(`Диалог успешно удален`)))
            }
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

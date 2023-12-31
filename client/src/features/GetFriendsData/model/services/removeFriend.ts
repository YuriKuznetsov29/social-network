import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../../../shared/api/http/index'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'
import { getAllFriends } from './getAllFriends'
import { TFunction } from 'i18next'

export interface RequestChangeData {
    userId: string
    friendId: string
    friendFirstName: string
    friendLastName: string
    t?: TFunction<'pages', undefined>
}

export interface ResponseData {
    user: IUser
}

export const removeFriend = createAsyncThunk<void, RequestChangeData, ThunkConfig<string>>(
    'user/removeFriend',
    async (
        { userId, friendId, friendFirstName, friendLastName, t },
        { rejectWithValue, dispatch, extra }
    ) => {
        try {
            const response = await extra.api.patch<ResponseData>(
                `${API_URL}/user/${userId}/removeFriend`,
                {
                    friendId,
                }
            )
            dispatch(userDataActions.setUserData(response.data.user))
            dispatch(getAllFriends(userId))
            if (t) {
                dispatch(
                    notificationsActions.setNotification(
                        t(`Вы удалили пользователя из друзей`, {
                            firstName: friendFirstName,
                            lastName: friendLastName,
                        })
                    )
                )
            }
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

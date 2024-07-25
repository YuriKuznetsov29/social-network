import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../../../shared/api/http/index'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from '@/entities/UserData'
import { notificationsActions } from '@/features/Notifications'
import { TFunction, i18n } from 'i18next'

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

export const addFriend = createAsyncThunk<void, RequestChangeData, ThunkConfig<string>>(
    'user/addFriend',
    async (
        { userId, friendId, friendLastName, friendFirstName, t },
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
            if (t) {
                dispatch(
                    notificationsActions.setNotification(
                        t(`Вы добавили пользователя в друзья`, {
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

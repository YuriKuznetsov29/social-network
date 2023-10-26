import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'
import { TFunction } from 'i18next'

export interface ResponseData {
    user: IUser
}

type t = TFunction<'authForms', undefined>

export const removeAvatar = createAsyncThunk<void, t, ThunkConfig<string>>(
    'file/removeAvatar',
    async (t, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.delete<ResponseData>(`/file/removeAvatar`)

            dispatch(userDataActions.setUserData(response.data.user))
            dispatch(notificationsActions.setNotification(t(`Аватар успешно удален`)))
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

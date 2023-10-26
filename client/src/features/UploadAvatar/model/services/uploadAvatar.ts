import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'
import { TFunction } from 'i18next'

export interface ResponseData {
    user: IUser
}

export interface RequestData {
    file: string | Blob
    t?: TFunction<'authForms', undefined>
}

export const uploadAvatar = createAsyncThunk<void, RequestData, ThunkConfig<string>>(
    'file/uploadAvatar',
    async ({ file, t }, { dispatch, extra, rejectWithValue }) => {
        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await extra.api.post<ResponseData>(`/file/uploadAvatar`, formData)
            dispatch(userDataActions.setUserData(response.data.user))
            if (t) {
                dispatch(notificationsActions.setNotification(t(`Аватар успешно загружен`)))
            }
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

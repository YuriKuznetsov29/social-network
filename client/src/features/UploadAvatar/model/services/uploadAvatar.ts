import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'

export interface ResponseData {
    user: IUser
}

export const uploadAvatar = createAsyncThunk<void, string | Blob, ThunkConfig<string>>(
    'file/uploadAvatar',
    async (file: string | Blob, { dispatch, extra, rejectWithValue }) => {
        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await extra.api.post<ResponseData>(`/file/uploadAvatar`, formData)
            dispatch(userDataActions.setUserData(response.data.user))
            dispatch(notificationsActions.setNotification(`Аватар успешно загружен`))
            // return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser, userDataActions } from 'entities/UserData'
import { notificationsActions } from 'features/Notifications'

export interface ResponseData {
    user: IUser
}

export const removeAvatar = createAsyncThunk<void, void, ThunkConfig<string>>(
    'file/removeAvatar',
    async (_, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.delete<ResponseData>(
                `http://localhost:8080/api/file/removeAvatar`
            )

            dispatch(userDataActions.setUserData(response.data.user))
            dispatch(notificationsActions.setNotification(`Аватар успешно удален`))
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

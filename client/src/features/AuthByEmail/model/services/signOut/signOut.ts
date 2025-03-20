import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface RequestData {
    navigate?: (path: string) => void
}

export const signOut = createAsyncThunk<void, RequestData, ThunkConfig<string>>(
    'login/signOut',
    async ({ navigate }, { extra, dispatch, rejectWithValue }) => {
        try {
            await extra.api.post('/auth/signOut')
            localStorage.removeItem('token')
            // dispatch(userDataActions.setUserData({} as IUser))
            dispatch({ type: 'logout' })
            if (navigate) {
                navigate('/')
            }
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

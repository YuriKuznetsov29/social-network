import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { ThunkConfig } from 'app/Providers/StoreProvider/config/StateSchema'
import { IUser } from 'entities/UserData'
import { MessageData } from 'shared/lib/hook/useChat'
import { Dialog } from '../types/dialog'
import { ICompanion } from '../types/companion'
import { IMessage } from '../types/message'

type RequestAuthData = { roomId: string; friendId: string }[]

interface ResponseData {
    dialogs: Dialog[]
}

export const getDialogs = createAsyncThunk<ResponseData, RequestAuthData, ThunkConfig<string>>(
    'messenger/getDialogs',
    async (conversations, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post(`/messenger/getDialogs`, {
                conversations,
            })

            return response.data
        } catch (e) {
            console.log(e)
            if (isAxiosError(e) && e.response) {
                return rejectWithValue(e.response.data.error.message)
            } else {
                return rejectWithValue('error')
            }
        }
    }
)

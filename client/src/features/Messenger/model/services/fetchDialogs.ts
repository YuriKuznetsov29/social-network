import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { IUser } from '@/entities/UserData'
import { MessageData } from '@/shared/lib/hook/useChat'
import { Dialog } from '../types/dialog'
import { ICompanion } from '../types/companion'
import { IMessage } from '../types/message'

type RequestAuthData = { roomId: string; friendId: string }[]

interface ResponseData {
    dialogs: Dialog[]
}

export const fetchDialogs = createAsyncThunk<Dialog[], RequestAuthData, ThunkConfig<string>>(
    'messenger/fetchDialogs',
    async (conversations, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post(`/messenger/getDialogs`, {
                conversations,
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data.dialogs
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

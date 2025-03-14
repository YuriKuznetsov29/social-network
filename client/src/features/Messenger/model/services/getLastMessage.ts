import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { MessageData } from '@/shared/lib/hook/useChat'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { API_URL } from '../../../../shared/api/http/index'

export interface RequestData {
    roomId: string
}

export interface Response {
    message: MessageData
}

export const getLastMessage = createAsyncThunk<Response, RequestData, ThunkConfig<string>>(
    'messenger/getLastMessage',
    async ({ roomId }, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post<Response>(`${API_URL}/messenger/getLastMessage`, {
                roomId: roomId,
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

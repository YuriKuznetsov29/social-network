import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { MessageData } from '@/shared/lib/hook/useChat'

export interface RequestData {
    roomId: string
}

export interface Response {
    message: MessageData
}

export const getLastMessage = createAsyncThunk<Response, RequestData, { rejectValue: string }>(
    'messenger/getLastMessage',
    async ({ roomId }, { rejectWithValue }) => {
        try {
            const response = await $api.post<Response>(`${API_URL}/messenger/getLastMessage`, {
                roomId: roomId,
            })
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

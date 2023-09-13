import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { MessageData } from 'widgets/Dialog/model/useChat'

export interface RequestData {
    roomId: string
}

export interface Response {
    message: MessageData
}

export const getLastMessage = createAsyncThunk<Response, RequestData, { rejectValue: string }>(
    'messenger/getLastMessage',
    async ({ roomId }) => {
        try {
            const response = await $api.post<Response>(`${API_URL}/messenger/getLastMessage`, {
                roomId: roomId,
            })
            return response.data
        } catch (e: unknown) {
            console.log(e)
        }
    }
)

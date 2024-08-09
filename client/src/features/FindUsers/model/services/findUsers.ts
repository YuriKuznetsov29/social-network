import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { AuthResponse } from '@/features/AuthByEmail/model/types/response/AuthResponse'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'

export interface RequestData {
    firstName: string
    lastName: string
}

export interface ResponseData {
    users: IUser[]
}

export const findUsers = createAsyncThunk<ResponseData, RequestData, ThunkConfig<string>>(
    'user/findUser',
    async ({ firstName, lastName }, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<ResponseData>(`${API_URL}/user/findUser`, {
                firstName,
                lastName,
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

import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../shared/api/http/index'
import { AuthResponse } from '@/features/AuthByEmail/model/types/response/AuthResponse'
import { IUser } from '@/entities/UserData/model/types/IUser'

export interface RequestData {
    firstName: string
    lastName: string
}

export interface ResponseData {
    users: IUser[]
}

export const findUsers = createAsyncThunk<ResponseData, RequestData, { rejectValue: string }>(
    'user/findUser',
    async ({ firstName, lastName }, { rejectWithValue }) => {
        try {
            const response = await $api.post<ResponseData>(`${API_URL}/user/findUser`, {
                firstName,
                lastName,
            })
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)

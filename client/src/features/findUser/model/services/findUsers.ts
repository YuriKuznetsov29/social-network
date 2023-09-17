import { createAsyncThunk } from '@reduxjs/toolkit'
import $api, { API_URL } from '../../../../http/index'
import { AuthResponse } from 'features/AuthByEmail/model/types/response/AuthResponse'
import { IUser } from 'features/AuthByEmail/model/types/IUser'

export interface RequestData {
    firstName: string
    lastName: string
}

export interface ResponseData {
    users: IUser[]
}

export const findUsers = createAsyncThunk<ResponseData, RequestData, { rejectValue: string }>(
    'user/findUser',
    async ({ firstName, lastName }) => {
        try {
            const response = await $api.get<ResponseData>(
                `${API_URL}/user/findUser/${firstName}/${lastName}`
            )
            return response.data
        } catch (e: unknown) {
            console.log(e)
        }
    }
)

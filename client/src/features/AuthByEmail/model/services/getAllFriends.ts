import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '../types/response/AuthResponse'
import $api, { API_URL } from '../../../../http/index'
import { IUser } from '../types/IUser'

export interface RequestData {
    userId: string
}

export interface Response {
    friends: IUser[]
}

export const getAllFriends = createAsyncThunk<Response, RequestData, { rejectValue: string }>(
    'user/getAllFriends',
    async ({ userId }) => {
        try {
            const response = await $api.get<Response>(`${API_URL}/user/${userId}/getAllFriends`)
            return response.data
        } catch (e: unknown) {
            console.log(e)
        }
    }
)

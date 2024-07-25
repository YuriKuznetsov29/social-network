import { IUser } from '@/entities/UserData/model/types/IUser'
import $api, { API_URL } from './http/index'

interface ResponseUserData {
    user: IUser
}

export const getUserDataById = async (id: string) => {
    try {
        const response = await $api.get<ResponseUserData>(`${API_URL}/user/${id}`)

        return response.data.user
    } catch (e) {
        console.log(e)
    }
}

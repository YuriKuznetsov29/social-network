import { IUser } from '../../../../../entities/UserData/model/types/IUser'

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: IUser
}

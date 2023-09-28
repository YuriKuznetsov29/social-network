import { IUser } from '../../../../entities/UserData/model/types/IUser'

export interface AuthSchema {
    isLoading: boolean
    isAuth: boolean
    email: string
    password: string
    error?: string
    // userData: IUser
}

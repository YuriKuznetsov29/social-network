import { IUser } from '../../../../entities/UserData/model/types/IUser'

export interface AuthSchema {
    isLoading: boolean
    initAuth: boolean
    isAuth: boolean
    email: string
    password: string
    error?: string
    regSuccess: boolean
    // userData: IUser
}

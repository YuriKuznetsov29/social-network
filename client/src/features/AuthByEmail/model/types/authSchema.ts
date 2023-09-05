import { IUser } from './IUser'

export interface AuthSchema {
    isLoading: boolean
    isAuth: boolean
    email: string
    password: string
    error?: string
    userData: IUser
}

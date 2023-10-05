import { IUser } from './IUser'

export interface UserDataSchema {
    userData: IUser
    isLoading: boolean
    _initialized: boolean
    error?: string
}

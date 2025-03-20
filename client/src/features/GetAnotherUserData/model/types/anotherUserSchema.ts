import { IUser } from '@/entities/UserData/model/types/IUser'

export interface AnotherUserSchema {
    isLoading: boolean
    error?: string
    userData: IUser
    _initialized: boolean
}

import { IUser } from 'features/AuthByEmail/model/types/IUser'

export interface AnotherUserSchema {
    isLoading: boolean
    error?: string
    userData: IUser
}

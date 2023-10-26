import { IUser } from 'entities/UserData'

export interface LikesSchema {
    users: IUser[]
    isLoading: boolean
    error?: string
}

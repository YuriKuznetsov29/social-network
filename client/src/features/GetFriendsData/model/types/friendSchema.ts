import { IUser } from 'entities/UserData/model/types/IUser'

export interface FriendsSchema {
    error?: string
    isLoading: boolean
    friends: IUser[]
}

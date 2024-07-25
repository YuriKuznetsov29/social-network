import { IUser } from '@/entities/UserData/model/types/IUser'

export interface SearchUsersSchema {
    firstName: string
    lastName: string
    isLoading: boolean
    users: IUser[]
}

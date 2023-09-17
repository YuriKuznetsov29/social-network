import { IUser } from 'features/AuthByEmail/model/types/IUser'

export interface SearchUsersSchema {
    firstName: string
    lastName: string
    isLoading: boolean
    users: IUser[]
}

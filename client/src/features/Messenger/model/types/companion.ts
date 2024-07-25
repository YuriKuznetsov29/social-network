import { IUser } from '@/entities/UserData'

export interface ICompanion {
    user: IUser
    conversation: { roomId: string; friendId: string }
}

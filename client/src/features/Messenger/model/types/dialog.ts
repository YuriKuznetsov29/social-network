import { IUser } from 'entities/UserData'
import { IMessage } from './message'

export interface Dialog {
    id: string
    message: IMessage
    companion: IUser
    conversation: { roomId: string; friendId: string }
}

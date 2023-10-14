import { IUser } from 'entities/UserData'
import { IMessage } from './message'

export interface Dialog {
    message: IMessage
    companion: IUser
    conversation: { roomId: string; friendId: string }
}

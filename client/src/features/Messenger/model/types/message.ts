import { IUser } from 'entities/UserData'

export interface IMessage {
    messageId: string
    textOrPathToFile: string
    roomId: string
    author: string
    createdAt?: string
    user: IUser[]
}

import { IUser } from 'entities/UserData/model/types/IUser'
import { MessageData } from 'shared/lib/hook/useChat'

export interface MessengerSchema {
    lastMessage: MessageData
    users: IUser[]
}

import { IUser } from 'entities/UserData/model/types/IUser'
import { MessageData } from 'app/hooks/useChat'

export interface MessengerSchema {
    lastMessage: MessageData
    users: IUser[]
}

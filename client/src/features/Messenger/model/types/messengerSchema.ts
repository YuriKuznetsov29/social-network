import { IUser } from 'features/AuthByEmail/model/types/IUser'
import { MessageData } from 'widgets/Dialog/model/useChat'

export interface MessengerSchema {
    lastMessage: MessageData
    users: IUser[]
}

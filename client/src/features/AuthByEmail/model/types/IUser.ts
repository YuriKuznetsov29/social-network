import { Conversations } from './response/Conversations'

export interface IUser {
    email: string
    userId: string
    firstName: string
    lastName: string
    password: string
    gender: 'male' | 'female'
    birthDay: string
    avatarPath: string
    friends: string[]
    conversations: Conversations[]
    likes: string[]
}

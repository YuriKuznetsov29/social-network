import { AuthSchema } from 'features/AuthByEmail/model/types/authSchema'
import { AnotherUserSchema } from 'features/getAnotherUser/model/types/anotherUserSchema'

export interface StateSchema {
    authForm: AuthSchema
    anotherUser: AnotherUserSchema
}

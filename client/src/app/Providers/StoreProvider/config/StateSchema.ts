import { AuthSchema } from 'features/AuthByEmail/model/types/authSchema'
import { MessengerSchema } from 'features/Messenger'
import { PostHandlerSchema } from 'features/PostHandler/model/types/postHandlerSchema'
import { SearchUsersSchema } from 'features/findUser'
import { AnotherUserSchema } from 'features/getAnotherUser/model/types/anotherUserSchema'

export interface StateSchema {
    authForm: AuthSchema
    anotherUser: AnotherUserSchema
    messenger: MessengerSchema
    posts: PostHandlerSchema
    searchUsers: SearchUsersSchema
}

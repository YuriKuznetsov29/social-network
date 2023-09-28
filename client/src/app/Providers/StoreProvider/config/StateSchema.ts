import { AxiosError, AxiosInstance } from 'axios'
import { UserDataSchema } from 'entities/UserData/model/types/userDataSchema'
import { AuthSchema } from 'features/AuthByEmail/model/types/authSchema'
import { SearchUsersSchema } from 'features/FindUsers/model/type/searchUsersSchema'
import { AnotherUserSchema } from 'features/GetAnotherUserData/model/types/anotherUserSchema'
import { FriendsSchema } from 'features/GetFriendsData'
import { MessengerSchema } from 'features/Messenger'
import { PostHandlerSchema } from 'features/PostHandler/model/types/postHandlerSchema'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
    authForm: AuthSchema
    anotherUser: AnotherUserSchema
    messenger: MessengerSchema
    posts: PostHandlerSchema
    searchUsers: SearchUsersSchema
    friends: FriendsSchema
    user: UserDataSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}

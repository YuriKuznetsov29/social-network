import { NewsSchema } from '@/entities/News'
import { UserDataSchema } from '@/entities/UserData/model/types/userDataSchema'
import { LikesSchema } from '@/entities/WhoLikesIt'
import { AuthSchema } from '@/features/AuthByEmail/model/types/authSchema'
import { SearchUsersSchema } from '@/features/FindUsers/model/type/searchUsersSchema'
import { AnotherUserSchema } from '@/features/GetAnotherUserData/model/types/anotherUserSchema'
import { FriendsSchema } from '@/features/GetFriendsData'
import { MessengerSchema } from '@/features/Messenger'
import { NotificationsSchema } from '@/features/Notifications'
import { PostHandlerSchema } from '@/features/PostHandler/model/types/postHandlerSchema'
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
    authForm: AuthSchema
    anotherUser: AnotherUserSchema
    messenger: MessengerSchema
    posts: PostHandlerSchema
    searchUsers: SearchUsersSchema
    friends: FriendsSchema
    user: UserDataSchema
    notifications: NotificationsSchema
    likes: LikesSchema
    //асинхронные редюсеры
    news: NewsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}

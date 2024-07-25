import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { authReducer } from '@/features/AuthByEmail'
import { messengerReducer } from '@/features/Messenger'
import { postHandlerReducer } from '@/features/PostHandler'
import { searchUsersReducer } from '@/features/FindUsers'
import { anotherUserReducer } from '@/features/GetAnotherUserData/model/slice/anotherUserSlice'
import { friendsReducer } from '@/features/GetFriendsData'
import { userDataReducer } from '@/entities/UserData'
import { NavigateOptions, To } from 'react-router-dom'
import $api from '@/shared/api/http'
import { notificationsReducer } from '@/features/Notifications'
import { createReducerManager } from './reducerManager'
import { likesReducer } from '@/entities/WhoLikesIt'
import { newsReducer } from '@/entities/News'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        authForm: authReducer,
        anotherUser: anotherUserReducer,
        messenger: messengerReducer,
        posts: postHandlerReducer,
        searchUsers: searchUsersReducer,
        friends: friendsReducer,
        user: userDataReducer,
        notifications: notificationsReducer,
        likes: likesReducer,
        news: newsReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export const store = createReduxStore()

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof createReduxStore>['getState']

// export const store = createReduxStore()

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>

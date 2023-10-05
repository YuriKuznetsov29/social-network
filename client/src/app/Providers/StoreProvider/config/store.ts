import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { authReducer } from 'features/AuthByEmail'
import { messengerReducer } from 'features/Messenger'
import { postHandlerReducer } from 'features/PostHandler'
import { searchUsersReducer } from 'features/FindUsers'
import { anotherUserReducer } from 'features/GetAnotherUserData/model/slice/anotherUserSlice'
import { friendsReducer } from 'features/GetFriendsData'
import { userDataReducer } from 'entities/UserData'
import { NavigateOptions, To } from 'react-router-dom'
import $api from 'shared/api/http'
import { notificationsReducer } from 'features/Notifications'

export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        authForm: authReducer,
        anotherUser: anotherUserReducer,
        messenger: messengerReducer,
        posts: postHandlerReducer,
        searchUsers: searchUsersReducer,
        friends: friendsReducer,
        user: userDataReducer,
        notifications: notificationsReducer,
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })
}

export const store = createReduxStore()

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof createReduxStore>['getState']

// export const store = createReduxStore()

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>

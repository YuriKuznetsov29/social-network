import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { authReducer } from 'features/AuthByEmail'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        authForm: authReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}

export const store = createReduxStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

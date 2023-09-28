import { Action, AnyAction, MiddlewareArray, ThunkMiddleware } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { StateSchema } from 'app/Providers/StoreProvider'
import { ThunkExtraArg } from 'app/Providers/StoreProvider/config/StateSchema'

export const getUserData = (store: StateSchema) => store.user?.userData

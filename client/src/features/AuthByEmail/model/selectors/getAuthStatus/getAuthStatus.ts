import { StateSchema } from 'app/Providers/StoreProvider'

export const getAuthStatus = (store: StateSchema) => store.authForm?.isAuth

import { StateSchema } from 'app/Providers/StoreProvider'

export const getAuthState = (store: StateSchema) => store.authForm

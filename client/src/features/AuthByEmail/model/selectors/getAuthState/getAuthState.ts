import { StateSchema } from 'app/Providers/StoreProvider'

export const getAuthState = (state: StateSchema) => state.authForm

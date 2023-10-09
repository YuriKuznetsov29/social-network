import { StateSchema } from 'app/Providers/StoreProvider'

export const getAuthError = (state: StateSchema) => state.authForm?.error

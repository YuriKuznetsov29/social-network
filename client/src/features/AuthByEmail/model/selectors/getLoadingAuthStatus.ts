import { StateSchema } from 'app/Providers/StoreProvider'

export const getLoadingAuthStatus = (state: StateSchema) => state.authForm?.isLoading

import { StateSchema } from '@/app/Providers/StoreProvider'

export const getInitAuthStatus = (state: StateSchema) => state.authForm?.initAuth

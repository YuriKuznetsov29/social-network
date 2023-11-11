import { StateSchema } from 'app/Providers/StoreProvider'

export const getRegStatus = (state: StateSchema) => state.authForm?.regSuccess

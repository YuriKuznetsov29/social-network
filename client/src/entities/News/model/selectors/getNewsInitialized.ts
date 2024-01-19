import { StateSchema } from 'app/Providers/StoreProvider'

export const getNewsInitialized = (state: StateSchema) => state.news._initialized

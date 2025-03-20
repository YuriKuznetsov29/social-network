import { StateSchema } from '@/app/Providers/StoreProvider'

export const getPostInitialized = (state: StateSchema) => state.posts._initialized

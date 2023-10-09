import { StateSchema } from 'app/Providers/StoreProvider'

export const getInitPostStatus = (state: StateSchema) => state.posts?._initialized

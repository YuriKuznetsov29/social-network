import { StateSchema } from 'app/Providers/StoreProvider'

export const getPostLoadingStatus = (state: StateSchema) => state.posts?.isLoading

import { StateSchema } from '@/app/Providers/StoreProvider'

export const getLikesLoading = (state: StateSchema) => state.likes?.isLoading

import { StateSchema } from '@/app/Providers/StoreProvider'

export const getFriendsLoadingStatus = (state: StateSchema) => state.friends?.isLoading

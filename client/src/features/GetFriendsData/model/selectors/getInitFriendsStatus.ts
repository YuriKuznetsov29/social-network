import { StateSchema } from '@/app/Providers/StoreProvider'

export const getInitFriendsStatus = (state: StateSchema) => state.friends?._initialized

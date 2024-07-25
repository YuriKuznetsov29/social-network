import { StateSchema } from '@/app/Providers/StoreProvider'

export const getFriendsData = (state: StateSchema) => state.friends?.friends

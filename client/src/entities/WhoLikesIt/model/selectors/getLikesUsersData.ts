import { StateSchema } from 'app/Providers/StoreProvider'

export const getLikesUsersData = (state: StateSchema) => state.likes?.users

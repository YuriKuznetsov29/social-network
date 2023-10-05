import { StateSchema } from 'app/Providers/StoreProvider'

export const getUserData = (store: StateSchema) => store.user?.userData

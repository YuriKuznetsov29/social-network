import { StateSchema } from 'app/Providers/StoreProvider'

export const getDialogsData = (state: StateSchema) => state.messenger?.dialogs

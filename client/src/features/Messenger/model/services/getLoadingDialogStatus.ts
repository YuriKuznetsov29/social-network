import { StateSchema } from 'app/Providers/StoreProvider'

export const getLoadingDialogStatus = (state: StateSchema) => state.messenger?.isLoading

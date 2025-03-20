import { StateSchema } from '@/app/Providers/StoreProvider'

export const getUserDataLoading = (state: StateSchema) => state.user?.isLoading

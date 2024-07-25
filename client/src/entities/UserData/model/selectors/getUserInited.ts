import { StateSchema } from '@/app/Providers/StoreProvider'

export const getUserInitied = (state: StateSchema) => state.user?._initialized

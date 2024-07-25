import { StateSchema } from '@/app/Providers/StoreProvider'

export const getNewsLoadingStatus = (state: StateSchema) => state.news?.isLoading

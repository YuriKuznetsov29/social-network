import { StateSchema } from '@/app/Providers/StoreProvider'

export const getNewsPage = (state: StateSchema) => state.news.page

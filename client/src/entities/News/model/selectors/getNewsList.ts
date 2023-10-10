import { StateSchema } from 'app/Providers/StoreProvider'

export const getNewsList = (state: StateSchema) => state.news?.news

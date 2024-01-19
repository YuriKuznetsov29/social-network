import { StateSchema } from 'app/Providers/StoreProvider'

export const getNewsHasMore = (state: StateSchema) => state.news.hasMore

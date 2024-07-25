import { StateSchema } from '@/app/Providers/StoreProvider'

export const getPostHasMore = (state: StateSchema) => state.posts.hasMore

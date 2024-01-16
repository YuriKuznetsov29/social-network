import { StateSchema } from 'app/Providers/StoreProvider'

export const getPostsPage = (state: StateSchema) => state.posts.page

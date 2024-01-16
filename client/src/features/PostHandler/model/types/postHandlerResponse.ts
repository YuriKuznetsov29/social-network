import { IPost } from './post'

export interface PostHandlerResponse {
    posts: IPost[]
    hasMore: boolean
}

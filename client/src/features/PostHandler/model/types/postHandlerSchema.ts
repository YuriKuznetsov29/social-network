import { IComment } from './comment'
import { IPost } from './post'

export interface PostHandlerSchema {
    isLoading: boolean
    comments: IComment[]
    posts: IPost[]
    page: number
    hasMore: boolean
    _initialized: boolean
    error?: string
}

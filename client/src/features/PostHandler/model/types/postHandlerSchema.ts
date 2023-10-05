import { IComment } from './comment'
import { IPost } from './post'

export interface PostHandlerSchema {
    isLoading: boolean
    comments: IComment[]
    posts: IPost[]
    _initialized: boolean
}

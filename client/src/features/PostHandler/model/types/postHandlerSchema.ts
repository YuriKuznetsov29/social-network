import { IComment } from './comment'
import { IPost } from './post'

export interface PostHandlerSchema {
    comments: IComment[]
    posts: IPost[]
}

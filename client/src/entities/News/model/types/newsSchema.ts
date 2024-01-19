import { IPost } from 'features/PostHandler'

export interface NewsSchema {
    news: IPost[]
    isLoading: boolean
    error?: string
    hasMore: boolean
    page: number
}

import classNames from 'classnames'
import cls from './PostsList.module.scss'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { IPost, getPostHandlerState } from 'features/PostHandler'
import { Post } from 'entities/Post/ui/Post'
import { PostLoader } from 'shared/ui/PostLoader'

interface PostsListProps {
    className?: string
}

export const PostsList = ({ className }: PostsListProps) => {
    const { posts, isLoading } = useAppSelector(getPostHandlerState)

    if (isLoading) return <PostLoader />

    return (
        <>
            {posts.map((post: IPost) => (
                <Post post={post} key={post._id} />
            ))}
        </>
    )
}

import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { IPost, getPostHandlerState, getPostInitialized } from '@/features/PostHandler'
import { Post } from '@/entities/Post/ui/Post/Post'
import { PostLoader } from '@/shared/ui/PostLoader'

export const PostsList = () => {
    const { posts, isLoading } = useAppSelector(getPostHandlerState)
    const initialized = useAppSelector(getPostInitialized)

    if (isLoading && !initialized) return <PostLoader />

    return (
        <>
            {posts.map((post: IPost) => (
                <Post post={post} key={post._id} />
            ))}
        </>
    )
}

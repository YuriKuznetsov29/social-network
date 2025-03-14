import { Post } from '@/entities/Post/ui/Post/Post'
import { IPost, getPostHandlerState, getPostInitialized } from '@/features/PostHandler'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { PostLoader } from '@/shared/ui/PostLoader'

export const PostsList = () => {
    const { posts, isLoading } = useAppSelector(getPostHandlerState)
    const initialized = useAppSelector(getPostInitialized)

    // if (true) return <PostLoader />
    if (isLoading && !initialized) return <PostLoader />

    return (
        <>
            {posts.map((post: IPost) => (
                <Post post={post} key={post._id} />
            ))}
        </>
    )
}

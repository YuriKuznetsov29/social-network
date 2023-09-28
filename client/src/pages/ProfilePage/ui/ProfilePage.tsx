import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { CreatePost, IPost, getPostHandlerState, getUserPosts } from 'features/PostHandler'
import { Post } from 'entities/Post'
import { useEffect } from 'react'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import cls from './ProfilePage.module.scss'
import { Friends } from 'entities/Friends'
import { UserData, getUserData } from 'entities/UserData'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const { posts } = useAppSelector(getPostHandlerState)
    const userData = useAppSelector(getUserData)

    useEffect(() => {
        dispatch(getUserPosts({ author: userData.userId }))
    }, [])

    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <UserData />
                    <Friends />
                    <CreatePost />
                    {posts.map((post: IPost) => (
                        <Post post={post} key={post._id} />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default ProfilePage

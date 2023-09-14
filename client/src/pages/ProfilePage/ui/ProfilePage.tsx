import classNames from 'classnames'
import cls from './ProfilePage.module.scss'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { UserData } from 'widgets/UserData/ui/UserData'
import { Friends } from 'widgets/Friends'
import { CreatePost } from 'widgets/CreatePost'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getPostHandlerState, getUserPosts } from 'features/PostHandler'
import { Post } from 'widgets/Post'
import { useEffect } from 'react'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { Button } from 'shared/ui/Button/Button'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const { posts } = useAppSelector(getPostHandlerState)
    const { userData } = useAppSelector(getAuthState)

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
                    <Button onClick={() => dispatch(getUserPosts({ author: userData.userId }))}>
                        dispatch
                    </Button>
                    <CreatePost />
                    {posts.map((post) => (
                        <Post post={post} key={post._id} />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default ProfilePage

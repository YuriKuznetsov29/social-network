import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import {
    CreatePost,
    IPost,
    getInitPostStatus,
    getPostHandlerState,
    getPostLoadingStatus,
    getUserPosts,
} from 'features/PostHandler'
import { Post } from 'entities/Post'
import { useEffect } from 'react'
import { Friends } from 'entities/Friends'
import { UserData, getUserData } from 'entities/UserData'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { PostLoader } from 'shared/ui/PostLoader'
import cls from './ProfilePage.module.scss'
import { PostsList } from 'entities/PostsList'
import { useMobile } from 'shared/lib/hook/useMobile'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const { userId } = useAppSelector(getUserData)
    const isMobile = useMobile()

    useEffect(() => {
        if (userId) {
            dispatch(getUserPosts({ author: userId }))
        }
    }, [userId])

    return (
        <>
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <UserData />
                    <Friends />
                    <CreatePost />
                    <PostsList />
                </div>
            </Container>
        </>
    )
}

export default ProfilePage

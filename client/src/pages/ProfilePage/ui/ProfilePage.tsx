import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { CreatePost, getUserPosts } from 'features/PostHandler'
import { useEffect } from 'react'
import { Friends } from 'entities/Friends'
import { UserData, getUserData } from 'entities/UserData'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { useMobile } from 'shared/lib/hook/useMobile'
import { PostsList } from 'entities/Post'
import cls from './ProfilePage.module.scss'

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

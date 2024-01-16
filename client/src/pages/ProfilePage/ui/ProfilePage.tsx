import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { CreatePost } from 'features/PostHandler'
import { useCallback, useEffect } from 'react'
import { Friends } from 'entities/Friends'
import { UserData, getUserData } from 'entities/UserData'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { useMobile } from 'shared/lib/hook/useMobile'
import { PostsList } from 'entities/Post'
import cls from './ProfilePage.module.scss'
import { Page } from 'shared/ui/Page/Page'
import { fetchUserPosts } from 'features/PostHandler/model/services/fetchUserPosts'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const { userId } = useAppSelector(getUserData)
    const isMobile = useMobile()

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserPosts({ author: userId }))
        }
    }, [userId])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchUserPosts({ author: userId }))
    }, [dispatch])

    return (
        <Page onScrollEnd={onLoadNextPart}>
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
        </Page>
    )
}

export default ProfilePage

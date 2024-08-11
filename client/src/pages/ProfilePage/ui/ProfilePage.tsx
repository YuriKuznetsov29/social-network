import classNames from 'classnames'
import { Header } from '@/widgets/Header'
import Container from '@/shared/ui/Container/Container'
import { SideBar } from '@/widgets/SideBar'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { CreatePost, getPostHasMore } from '@/features/PostHandler'
import { MutableRefObject, useEffect, useRef } from 'react'
import { Friends } from '@/entities/Friends'
import { UserData, getUserData } from '@/entities/UserData'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { PostsList } from '@/entities/Post'
import { fetchUserPosts } from '@/features/PostHandler/model/services/fetchUserPosts'
import { useInfiniteScroll } from '@/shared/lib/hook/useInfiniteScroll'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const { userId } = useAppSelector(getUserData)
    const hasMore = useAppSelector(getPostHasMore)
    const isMobile = useMobile()

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    const onLoadNextPart = () => {
        if (hasMore) {
            dispatch(fetchUserPosts({ author: userId }))
        }
    }
    useInfiniteScroll({ triggerRef, wrapperRef: null, callback: onLoadNextPart })

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserPosts({ author: userId }))
        }
    }, [userId])

    return (
        <div data-testid="profile">
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <section className={classNames(cls.contentWrapper, {}, [className])}>
                    <UserData />
                    <Friends />
                    <CreatePost />
                    <PostsList />
                    <div ref={triggerRef}></div>
                </section>
            </Container>
        </div>
    )
}

export default ProfilePage

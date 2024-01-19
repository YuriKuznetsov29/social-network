import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { News, getNewsHasMore } from 'entities/News'
import cls from './NewsPage.module.scss'
import { useMobile } from 'shared/lib/hook/useMobile'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { getNewsList } from 'entities/News/model/selectors/getNewsList'
import { getNewsLoadingStatus } from 'entities/News/model/selectors/getNewsLoadingStatus'
import { fetchNews } from 'entities/News/model/services/fetchNews'
import { MutableRefObject, useEffect, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll'

interface NewsPageProps {
    className?: string
}

const NewsPage = ({ className }: NewsPageProps) => {
    const isMobile = useMobile()

    const dispatch = useAppDispatch()
    const userData = useAppSelector(getUserData)
    const hasMore = useAppSelector(getNewsHasMore)

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    const onLoadNextPart = () => {
        if (hasMore && userData.friends) {
            dispatch(fetchNews({ friendList: userData.friends }))
        }
    }
    useInfiniteScroll({ triggerRef, wrapperRef: null, callback: onLoadNextPart })

    useEffect(() => {
        if (userData.friends) {
            dispatch(fetchNews({ friendList: userData.friends }))
        }
    }, [userData.friends])

    return (
        <>
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <section className={cls.contentWrapper}>
                    <News />
                    <div ref={triggerRef}></div>
                </section>
            </Container>
        </>
    )
}

export default NewsPage

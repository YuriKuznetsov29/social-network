import { News, getNewsHasMore } from '@/entities/News'
import { fetchNews } from '@/entities/News/model/services/fetchNews'
import { getUserData } from '@/entities/UserData'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useInfiniteScroll } from '@/shared/lib/hook/useInfiniteScroll'
import { useMobile } from '@/shared/lib/hook/useMobile'
import Container from '@/shared/ui/Container/Container'
import { Header } from '@/widgets/Header'
import { MobileNavigation } from '@/widgets/MobileNavigation/ui/MobileNavigation'
import { SideBar } from '@/widgets/SideBar'
import { Container as MuiContainer, Box } from '@mui/material'
import { MutableRefObject, useEffect, useRef } from 'react'

import cls from './NewsPage.module.scss'

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Header />
                    <MuiContainer
                        data-testid="news-page"
                        sx={{
                            display: 'flex',
                            pb: {
                                xs: '72px',
                                sm: '72px',
                            },
                        }}
                    >
                        <SideBar />
                        <Box
                            width="100%"
                            sx={{ maxWidth: { xl: '892px', lg: '892px', md: '892px' } }}
                        >
                            <News />
                            <div ref={triggerRef}></div>
                        </Box>
                    </MuiContainer>
                    <MobileNavigation activeBtn={1} />
                    <div data-testid="news-page">111</div>
                </>
            }
            off={
                <>
                    <Header />
                    <Container className={isMobile ? cls.container : ''}>
                        <SideBar />
                        <section data-testid="news-page" className={cls.contentWrapper}>
                            <News />
                            <div ref={triggerRef}></div>
                        </section>
                    </Container>
                </>
            }
        />
    )
}

export default NewsPage

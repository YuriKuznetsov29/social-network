import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { News } from 'entities/News'
import cls from './NewsPage.module.scss'
import { useMobile } from 'shared/lib/hook/useMobile'

interface NewsPageProps {
    className?: string
}

const NewsPage = ({ className }: NewsPageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <News />
            </Container>
        </>
    )
}

export default NewsPage

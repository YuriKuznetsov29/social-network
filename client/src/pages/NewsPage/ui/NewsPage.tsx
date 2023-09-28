import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { News } from 'entities/News'
import cls from './NewsPage.module.scss'

interface NewsPageProps {
    className?: string
}

export const NewsPage = ({ className }: NewsPageProps) => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <News />
                </div>
            </Container>
        </>
    )
}

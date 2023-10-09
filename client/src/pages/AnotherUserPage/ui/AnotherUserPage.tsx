import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import cls from './AnotherUserPage.module.scss'
import { AnotherUserProfile } from 'features/GetAnotherUserData/ui/AnotherUserProfile'
import { useMobile } from 'shared/lib/hook/useMobile'

interface AnotherUserPageProps {
    className?: string
}

const AnotherUserPage = ({ className }: AnotherUserPageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <AnotherUserProfile />
                </div>
            </Container>
        </>
    )
}

export default AnotherUserPage

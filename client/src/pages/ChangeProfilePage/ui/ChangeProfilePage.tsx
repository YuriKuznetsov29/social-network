import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ChangeProfile } from 'features/AuthByEmail'
import cls from './ChangeProfilePage.module.scss'
import { useMobile } from 'shared/lib/hook/useMobile'

interface ProfilePageProps {
    className?: string
}

const ChangeProfilePage = ({ className }: ProfilePageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <ChangeProfile />
                </div>
            </Container>
        </>
    )
}

export default ChangeProfilePage

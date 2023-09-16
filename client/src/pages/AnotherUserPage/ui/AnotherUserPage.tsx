import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { AnotherUserProfile } from 'features/getAnotherUser'
import cls from './AnotherUserPage.module.scss'

interface AnotherUserPageProps {
    className?: string
}

export const AnotherUserPage = ({ className }: AnotherUserPageProps) => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <AnotherUserProfile />
                </div>
            </Container>
        </>
    )
}
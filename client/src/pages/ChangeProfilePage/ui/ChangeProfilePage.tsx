import classNames from 'classnames'
import cls from './ChangeProfilePage.module.scss'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ChangeProfile } from 'widgets/ChangeProfile'

interface ProfilePageProps {
    className?: string
}

export const ChangeProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <ChangeProfile />
                </div>
            </Container>
        </>
    )
}

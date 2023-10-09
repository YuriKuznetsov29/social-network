import classNames from 'classnames'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ChangeProfile } from 'features/AuthByEmail'
import cls from './ChangeProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

export const ChangeProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <>
            <Header />
            <Container className={cls.container}>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <ChangeProfile />
                </div>
            </Container>
        </>
    )
}

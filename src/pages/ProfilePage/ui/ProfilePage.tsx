import classNames from 'classnames'
import cls from './ProfilePage.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { UserData } from 'widgets/UserData/ui/UserData'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <>
            <Header />
            <Container>
                <div className={classNames(cls.ProfilePage, {}, [className])}>
                    <SideBar />
                    <div className={cls.contentWrapper}>
                        <UserData />
                        Profile page
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProfilePage

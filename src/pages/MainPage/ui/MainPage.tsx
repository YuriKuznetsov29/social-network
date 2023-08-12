import classNames from 'classnames'
import cls from './MainPage.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar/ui/SideBar'

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    return (
        <Container>
            <div className={classNames(cls.MainPage, {}, [className])}>
                <SideBar />
                <div>
                    <AppLink to={'/profile'}>Profile Page Link</AppLink>
                    MainPage
                </div>
            </div>
        </Container>
    )
}

export default MainPage

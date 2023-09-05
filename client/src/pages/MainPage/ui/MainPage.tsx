import classNames from 'classnames'
import cls from './MainPage.module.scss'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar/ui/SideBar'
import { Header } from 'widgets/Header'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { SignInForm } from 'features/AuthByEmail'

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    const { isAuth } = useAppSelector(getAuthState)

    if (!isAuth) {
        return <SignInForm />
    }

    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div className={classNames(cls.MainPage, {}, [className])}>
                    <div>MainPage</div>
                </div>
            </Container>
        </>
    )
}

export default MainPage

import classNames from 'classnames'
import './styles/index.scss'
import { AppRouter } from './router'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { useTheme } from './Providers/ThemeProvider'
import { SignInForm, SignUpForm } from 'features/AuthByEmail'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            {/* <SignInForm /> */}
            <SignUpForm />
            <Header />
            <Container>
                <SideBar />
                <AppRouter />
            </Container>
        </div>
    )
}

export default App

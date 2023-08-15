import classNames from 'classnames'
import './styles/index.scss'
import { AppRouter } from './router'
import useTheme from './Providers/lib/useTheme'
import { Input } from 'shared/ui/Input/Input'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header />
            <Container>
                <SideBar />
                <AppRouter />
            </Container>
        </div>
    )
}

export default App

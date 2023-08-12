import classNames from 'classnames'
import './styles/index.scss'
import { AppRouter } from './router'
import useTheme from './Providers/lib/useTheme'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter />
        </div>
    )
}

export default App

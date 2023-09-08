import classNames from 'classnames'
import { AppRouter } from './router'
import { useTheme } from './Providers/ThemeProvider'
import { checkAuth } from 'features/AuthByEmail'
import { useEffect } from 'react'
import { useAppDispatch } from './Providers/StoreProvider/config/hooks'
import './styles/index.scss'

const App = () => {
    const { initTheme } = useTheme()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }

        initTheme()
    }, [])

    return <AppRouter />
}

export default App

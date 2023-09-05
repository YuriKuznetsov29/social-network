import classNames from 'classnames'
import './styles/index.scss'
import { AppRouter } from './router'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { useTheme } from './Providers/ThemeProvider'
import { SignInForm, SignUpForm, checkAuth } from 'features/AuthByEmail'
import { useEffect } from 'react'
import { useAppDispatch } from './Providers/StoreProvider/config/hooks'

const App = () => {
    const { initTheme } = useTheme()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }

        initTheme()
    }, [])

    return (
        // <div className={classNames('', {}, [])}>
        <AppRouter />
        // </div>
    )
}

export default App

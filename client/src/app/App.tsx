import classNames from 'classnames'
import { AppRouter } from './router'
import { useTheme } from './Providers/ThemeProvider'
import { checkAuth } from 'features/AuthByEmail'
import { useEffect } from 'react'
import { useAppDispatch } from '../shared/lib/hook/useAppDispatch'
import './styles/index.scss'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import useChat from './hooks/useChat'

const App = () => {
    // useTheme()
    const dispatch = useAppDispatch()

    useChat('1')

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }

        // initTheme()
    }, [])

    return <AppRouter />
}

export default App

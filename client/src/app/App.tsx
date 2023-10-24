import { AppRouter } from './router'
import { useTheme } from './Providers/ThemeProvider'
import { checkAuth } from 'features/AuthByEmail'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from '../shared/lib/hook/useAppDispatch'
import useChat from '../shared/lib/hook/useChat'
import './styles/index.scss'
import { authActions } from 'features/AuthByEmail/model/slice/authSlice'

const App = () => {
    const { initTheme } = useTheme()

    const dispatch = useAppDispatch()

    useChat('1')

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        } else {
            dispatch(authActions.setInit())
        }

        initTheme()
    }, [])

    return (
        <Suspense fallback="">
            <AppRouter />
        </Suspense>
    )
}

export default App

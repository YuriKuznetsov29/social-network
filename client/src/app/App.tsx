import { AppRouter } from './router'
import { ThemeProvider, useTheme } from './Providers/ThemeProvider'
import { checkAuth } from '@/features/AuthByEmail'
import { createContext, Suspense, useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../shared/lib/hook/useAppDispatch'
import useChat from '../shared/lib/hook/useChat'
import './styles/index.scss'
import { authActions } from '@/features/AuthByEmail/model/slice/authSlice'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
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

    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        []
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    )

    console.log(theme)

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ColorModeContext.Provider value={colorMode}>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <Suspense fallback="">
                            <AppRouter />
                        </Suspense>
                    </MuiThemeProvider>
                </ColorModeContext.Provider>
            }
            off={
                <ThemeProvider>
                    <Suspense fallback="">
                        <AppRouter />
                    </Suspense>
                </ThemeProvider>
            }
        />
    )
}

export default App

import { AppRouter } from './router'
import { Theme, useTheme } from './Providers/ThemeProvider'
import { checkAuth } from '@/features/AuthByEmail'
import { createContext, Suspense, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../shared/lib/hook/useAppDispatch'
import useChat from '../shared/lib/hook/useChat'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { LOCAL_STORAGE_THEME_KEY } from './Providers/ThemeProvider/lib/ThemeContext'
import './styles/index.scss'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
const App = () => {
    const { initTheme } = useTheme()
    const [mode, setMode] = useState<'light' | 'dark'>(defaultTheme)

    useChat('1')

    useLayoutEffect(() => {
        initTheme()
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, mode)
    }, [mode])

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

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ColorModeContext.Provider value={colorMode}>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <Suspense fallback="">
                            <AppRouter />
                            <Toaster />
                        </Suspense>
                    </MuiThemeProvider>
                </ColorModeContext.Provider>
            }
            off={
                <Suspense fallback="">
                    <AppRouter />
                </Suspense>
            }
        />
    )
}

export default App

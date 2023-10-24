import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        document.body.className = newTheme
    }

    const initTheme = () => {
        document.body.className = theme || Theme.DARK
    }

    return { theme, toggleTheme, initTheme }
}

export default useTheme

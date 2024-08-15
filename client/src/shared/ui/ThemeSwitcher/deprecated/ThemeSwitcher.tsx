import './ThemeSwitcher.scss'
import classNames from 'classnames'
import useTheme from '@/app/Providers/ThemeProvider/lib/useTheme'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <label className="label">
            <input className="input" type="checkbox" />
            <span className={'slider'} onClick={toggleTheme}></span>
        </label>
    )
}

export default ThemeSwitcher

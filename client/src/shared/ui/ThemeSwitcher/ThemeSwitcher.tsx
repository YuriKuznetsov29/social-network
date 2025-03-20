import './ThemeSwitcher.scss'

import { ColorModeContext } from '@/app/App'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'

import { default as ThemeSwitcherDeprecated } from './deprecated/ThemeSwitcher'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            }
            off={<ThemeSwitcherDeprecated />}
        />
    )
}

export default ThemeSwitcher

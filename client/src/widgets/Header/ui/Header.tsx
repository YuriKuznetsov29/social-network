import classNames from 'classnames'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@/features/AuthByEmail'
import { FoundUsersList } from '@/features/FindUsers'
import { Notification } from '@/features/Notifications'
import { SettingBtn } from '@/entities/SettingBtn'
import cls from './Header.module.scss'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Header as HeaderDeprecated } from './deprecated/Header'
import { AppBar, Box, IconButton, InputBase, Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'

interface HeaderProps {
    className?: string
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

export const Header = ({ className }: HeaderProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Box sx={{ flexGrow: 1, mb: 2 }}>
                    <AppBar position="static">
                        <Container
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: 1,
                                pb: 1,
                            }}
                        >
                            <FoundUsersList />
                            <Box display="flex" alignItems="center" gap={2}>
                                <ThemeSwitcher />
                                <LangSwitcher icon />
                                <SettingBtn />
                            </Box>
                        </Container>
                    </AppBar>
                    {/* {renderMobileMenu}
                    {renderMenu} */}
                </Box>
            }
            off={<HeaderDeprecated />}
        />
    )
}

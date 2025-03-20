import { SettingBtn } from '@/entities/SettingBtn'
import { FoundUsersList } from '@/features/FindUsers'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { AppBar, Box, InputBase, Container } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

import { Header as HeaderDeprecated } from './deprecated/Header'

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

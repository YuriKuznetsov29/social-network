import { getUserInitied } from '@/entities/UserData'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useMobile } from '@/shared/lib/hook/useMobile'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FeedIcon from '@mui/icons-material/Feed'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { SideBar as SidebarDeprecated } from './deprecated/SideBar'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const userInit = useAppSelector(getUserInitied)
    const { t } = useTranslation('pages')
    const isMobile = useMobile()
    const navigate = useNavigate()

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Box
                    maxWidth="260px"
                    width="100%"
                    sx={{
                        display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' },
                    }}
                >
                    <List
                        sx={{
                            width: '100%',
                        }}
                    >
                        <ListItem disablePadding onClick={() => navigate('/profile')}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('Моя страница')} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding onClick={() => navigate('/news')}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FeedIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('Новости')} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding onClick={() => navigate('/messenger')}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ChatBubbleIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('Мессенджер')} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding onClick={() => navigate('/friends')}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PeopleAltIcon />
                                </ListItemIcon>
                                <ListItemText primary={t('Друзья')} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            }
            off={<SidebarDeprecated />}
        />
    )
}

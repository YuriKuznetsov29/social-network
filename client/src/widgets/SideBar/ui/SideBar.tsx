import classNames from 'classnames'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import ProfileIcon from '@/shared/assets/icons/user-circle-bold.svg'
import NewsIcon from '@/shared/assets/icons/article-bold.svg'
import ChatIcon from '@/shared/assets/icons/chat-circle-bold.svg'
import UsersIcon from '@/shared/assets/icons/users-bold.svg'
import { SidebarLoader } from '@/shared/ui/SidebarLoader'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserInitied } from '@/entities/UserData'
import { useTranslation } from 'react-i18next'
import cls from './SideBar.module.scss'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { SideBar as SidebarDeprecated } from './deprecated/SideBar'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import FeedIcon from '@mui/icons-material/Feed'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

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
                <Box maxWidth="260px" width="100%">
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

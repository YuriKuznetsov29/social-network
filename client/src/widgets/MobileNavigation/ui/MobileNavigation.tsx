import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FeedIcon from '@mui/icons-material/Feed'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { forwardRef, useState } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />
})

interface MobileNavigationProps {
    className?: string
    activeBtn?: number
}

export const MobileNavigation = ({ className, activeBtn }: MobileNavigationProps) => {
    const [value, setValue] = useState(activeBtn || 0)

    // let location = useLocation()

    // console.log(location)

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                display: { xl: 'none', lg: 'none', md: 'none' },
                zIndex: 10,
            }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    // console.log(event, newValue)
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to={'/profile'}
                    // label="Профиль"
                    icon={<PersonIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to={'/news'}
                    // label="Favorites"
                    icon={<FeedIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to={'/messenger'}
                    // label="Archive"
                    icon={<ChatBubbleIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to={'/friends'}
                    // label="Archive"
                    icon={<PeopleAltIcon />}
                />
            </BottomNavigation>
        </Paper>
    )
}

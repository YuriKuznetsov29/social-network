import { IconButton, List, ListItem, ListItemButton, ListItemText, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState, useTransition } from 'react'
import { useTranslation } from 'react-i18next'

interface MessageOptionBtnProps {
    className?: string
    removeMessage: (messageId: string) => void
    messageId: string
}

export const MessageOptionBtn = ({
    className,
    messageId,
    removeMessage,
}: MessageOptionBtnProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const { t } = useTranslation('pages')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    return (
        <>
            <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <List>
                    <ListItem disablePadding onClick={() => removeMessage(messageId)}>
                        <ListItemButton>
                            <ListItemText primary={t('Удалить сообщение')} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Popover>
        </>
    )
}

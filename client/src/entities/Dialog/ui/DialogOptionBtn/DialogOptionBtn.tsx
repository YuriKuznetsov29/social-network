import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton, List, ListItemButton, ListItemText, Popover } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


interface DialogOptionBtnProps {
    className?: string
}

export const DialogOptionBtn = ({ className }: DialogOptionBtnProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    // const onClickRemoveConversation = (e: React.MouseEvent) => {
    //     e.preventDefault()
    //     dispatch(
    //         removeConversation({
    //             companionId: conversation.friendId,
    //             roomId: conversation.roomId,
    //             userId: userData.userId,
    //             t,
    //         })
    //     )
    // }
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
                    <ListItemButton>
                        <ListItemText primary={t('Удалить диалог')} />
                    </ListItemButton>
                </List>
            </Popover>
        </>
    )
}

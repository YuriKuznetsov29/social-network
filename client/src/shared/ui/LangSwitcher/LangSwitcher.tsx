import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import TranslateIcon from '@mui/icons-material/Translate'
import { IconButton, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { LangSwitcher as LangSwitcherDeprecated } from './deprecated/LangSwitcher'

interface LangSwitcherProps {
    className?: string
    short?: boolean
    icon?: boolean
}

export const LangSwitcher = memo(({ className, short, icon }: LangSwitcherProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const { t, i18n } = useTranslation()

    const currentLanguage = i18n.language.slice(0, 2)

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    const handleChange = (e: SelectChangeEvent<string>) => {
        i18n.changeLanguage(e.target.value)
    }

    const handleClickSwitchLanguage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        i18n.changeLanguage(e.currentTarget.dataset.value)
    }

    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                icon ? (
                    <div>
                        {/* <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Dashboard
                        </Button> */}
                        <IconButton aria-label="delete" onClick={handleClick}>
                            <TranslateIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem data-value="ru" onClick={(e) => handleClickSwitchLanguage(e)}>
                                Русский
                            </MenuItem>
                            <MenuItem data-value="en" onClick={(e) => handleClickSwitchLanguage(e)}>
                                English
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Select
                        value={currentLanguage}
                        onChange={(e: SelectChangeEvent) => handleChange(e)}
                        size="small"
                    >
                        <MenuItem value="ru">Русский</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                    </Select>
                )
            }
            off={<LangSwitcherDeprecated className={className} short={short} />}
        />
    )
})

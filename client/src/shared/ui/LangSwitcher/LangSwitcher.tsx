import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import classNames from 'classnames'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { LangSwitcher as LangSwitcherDeprecated } from './deprecated/LangSwitcher'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    const handleChange = (e: SelectChangeEvent<string>) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Select value={i18n.language} onChange={(e) => handleChange(e)} size="small">
                    <MenuItem value="ru">Русский</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                </Select>
            }
            off={<LangSwitcherDeprecated className={className} short={short} />}
        />
    )
})

import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from 'app/Providers/ThemeProvider'
import { StoreProvider } from 'app/Providers/StoreProvider'
import { ErrorBoundary } from 'app/Providers/ErrorBoundary'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'shared/config/i18n/i18n'
import { ru_short } from 'shared/config/i18n/locales/ru_short'
import { en_short } from 'shared/config/i18n/locales/en_short'

const thresholds = [
    { l: 's', r: 1 },
    { l: 'ss', r: 45, d: 'second' },
    { l: 'm', r: 1 },
    { l: 'mm', r: 59, d: 'minute' },
    { l: 'h', r: 1 },
    { l: 'hh', r: 23, d: 'hour' },
    { l: 'd', r: 1 },
    { l: 'dd', r: 29, d: 'day' },
    { l: 'M', r: 1 },
    { l: 'MM', r: 11, d: 'month' },
    { l: 'y', r: 1 },
    { l: 'yy', d: 'year' },
]

const config = {
    thresholds: thresholds,
}

dayjs.extend(relativeTime, config)

dayjs.extend(updateLocale)
dayjs.locale(ru_short, undefined, true)
dayjs.locale(en_short, undefined, true)
dayjs.extend(customParseFormat)

const localeList = dayjs.Ls

localeList['en'].relativeTime

dayjs.updateLocale('en', {
    relativeTime: {
        ...localeList['en'].relativeTime,
        ss: 'a few seconds',
    },
})

dayjs.updateLocale('ru', {
    relativeTime: {
        ...localeList['ru'].relativeTime,
        ss: 'несколько секунд',
    },
})

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <StoreProvider>
                <BrowserRouter>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </StoreProvider>
        </ErrorBoundary>
    </React.StrictMode>
)

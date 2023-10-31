import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from 'app/Providers/ThemeProvider'
import { StoreProvider } from 'app/Providers/StoreProvider'
import { ErrorBoundary } from 'app/Providers/ErrorBoundary'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { ru_short } from 'shared/config/dayjs/locales/ru_short'
import { en_short } from 'shared/config/dayjs/locales/en_short'
import { thresholds } from 'shared/config/dayjs/thresholds'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'shared/config/i18n/i18n'

dayjs.extend(relativeTime, {
    thresholds: thresholds,
})
dayjs.extend(updateLocale)
dayjs.extend(customParseFormat)
dayjs.locale(ru_short, undefined, true)
dayjs.locale(en_short, undefined, true)
const localeList = dayjs.Ls

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

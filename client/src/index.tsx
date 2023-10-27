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

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.locale(ru_short, undefined, true)
dayjs.locale(en_short, undefined, true)

const appHeight = () => {
    window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    })
}

window.addEventListener('resize', appHeight)
appHeight()

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

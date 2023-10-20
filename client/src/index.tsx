import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from 'app/Providers/ThemeProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { StoreProvider } from 'app/Providers/StoreProvider'
import { ErrorBoundary } from 'app/Providers/ErrorBoundary'
import 'shared/config/i18n/i18n'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

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

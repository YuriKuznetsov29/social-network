import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from 'app/Providers/ThemeProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'
import { StoreProvider } from 'app/Providers/StoreProvider'

dayjs.extend(relativeTime)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
)

import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from 'app/Providers/ThemeProvider'
import { Provider } from 'react-redux'
import { store } from 'app/Providers/StoreProvider/config/store'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

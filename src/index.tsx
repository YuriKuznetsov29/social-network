import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import ThemeProvider from 'app/Providers/ui/ThemeProvider'
import { createRoot } from 'react-dom/client'
import React from 'react'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

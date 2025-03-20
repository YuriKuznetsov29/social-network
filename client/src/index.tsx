import App from '@/app/App'
import { ErrorBoundary } from '@/app/Providers/ErrorBoundary'
import { StateSchema, StoreProvider } from '@/app/Providers/StoreProvider'
import { ThemeProvider } from '@/app/Providers/ThemeProvider'
import { ResponseUserData } from '@/entities/UserData'
import { AuthResponse } from '@/features/AuthByEmail'
import { en_short } from '@/shared/config/dayjs/locales/en_short'
import { ru_short } from '@/shared/config/dayjs/locales/ru_short'
import 'dayjs/locale/ru'
import { thresholds } from '@/shared/config/dayjs/thresholds'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/config/i18n/i18n'
import { BrowserRouter } from 'react-router-dom'

import $api from './shared/api/http'
import { ToggleFeatures } from './shared/lib/features/components/ToggleFeatures/ToggleFeatures'

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

const init = async () => {
    const token = localStorage.getItem('token')

    let initialState: DeepPartial<StateSchema> = {}

    if (token) {
        try {
            const authData = await $api.get<AuthResponse>(`auth/token`, {
                withCredentials: true,
            })

            const accessToken = authData.data?.accessToken
            const userId = authData.data?.user.userId

            if (userId && accessToken) {
                localStorage.setItem('token', authData.data.accessToken)
                const userData = await $api.get<ResponseUserData>(`/user/${userId}/initUser`)

                initialState = {
                    authForm: {
                        isAuth: true,
                    },
                    user: {
                        userData: userData.data.user,
                    },
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    const container = document.getElementById('root')
    const root = createRoot(container!)
    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <StoreProvider initialState={initialState}>
                    <BrowserRouter>
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={<App />}
                            off={
                                <ThemeProvider>
                                    <App />
                                </ThemeProvider>
                            }
                        />
                    </BrowserRouter>
                </StoreProvider>
            </ErrorBoundary>
        </React.StrictMode>
    )
}

init()

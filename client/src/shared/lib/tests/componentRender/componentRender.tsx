import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from 'app/Providers/StoreProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { ru_short } from 'shared/config/dayjs/locales/ru_short'
import { en_short } from 'shared/config/dayjs/locales/en_short'
import { thresholds } from 'shared/config/dayjs/thresholds'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import customParseFormat from 'dayjs/plugin/customParseFormat'

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

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const { route = '/', initialState } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

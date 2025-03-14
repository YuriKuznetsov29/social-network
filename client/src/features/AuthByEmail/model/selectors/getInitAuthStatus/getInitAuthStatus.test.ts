import { StateSchema } from '@/app/Providers/StoreProvider'

import { getInitAuthStatus } from './getInitAuthStatus'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            authForm: { initAuth: false },
        }
        expect(getInitAuthStatus(state as StateSchema)).toEqual(false)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getInitAuthStatus(state as StateSchema)).toEqual(undefined)
    })
})

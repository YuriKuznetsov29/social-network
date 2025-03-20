import { StateSchema } from '@/app/Providers/StoreProvider'

import { getRegStatus } from './getRegStatus'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            authForm: { regSuccess: false },
        }
        expect(getRegStatus(state as StateSchema)).toEqual(false)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getRegStatus(state as StateSchema)).toEqual(undefined)
    })
})

import { StateSchema } from '@/app/Providers/StoreProvider'
import { getAuthStatus } from './getAuthStatus'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            authForm: { isAuth: false },
        }
        expect(getAuthStatus(state as StateSchema)).toEqual(false)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAuthStatus(state as StateSchema)).toEqual(undefined)
    })
})

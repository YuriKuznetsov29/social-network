import { StateSchema } from 'app/Providers/StoreProvider'
import { getLoadingAuthStatus } from './getLoadingAuthStatus'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            authForm: { isLoading: false },
        }
        expect(getLoadingAuthStatus(state as StateSchema)).toEqual(false)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoadingAuthStatus(state as StateSchema)).toEqual(undefined)
    })
})

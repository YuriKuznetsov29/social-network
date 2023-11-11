import { StateSchema } from 'app/Providers/StoreProvider'
import { getAuthError } from './getAuthError'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            authForm: { error: 'error' },
        }
        expect(getAuthError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAuthError(state as StateSchema)).toEqual(undefined)
    })
})

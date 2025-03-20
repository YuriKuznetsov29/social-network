import { AuthSchema } from '../types/authSchema'
import { authActions, authReducer } from './authSlice'

describe('authSlice test', () => {
    test('test set initAuth', () => {
        const state: DeepPartial<AuthSchema> = { initAuth: false }
        expect(authReducer(state as AuthSchema, authActions.setInit())).toEqual({ initAuth: true })
    })
})

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import axios from 'axios'

import { signOut } from './signOut'

const mockedAxios = jest.mocked(axios)

describe('signOut.test', () => {
    test('success signOut', async () => {
        const thunk = new TestAsyncThunk(signOut)
        thunk.api.post = jest.fn()

        const result = await thunk.callThunk({})

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledWith({ type: 'logout' })
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error signOut', async () => {
        const thunk = new TestAsyncThunk(signOut)
        thunk.api.post = jest.fn().mockReturnValue(Promise.reject())

        const result = await thunk.callThunk({})

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})

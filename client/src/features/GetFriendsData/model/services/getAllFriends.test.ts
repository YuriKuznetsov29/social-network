import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { getAllFriends } from './getAllFriends'

describe('getAllFriends.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(getAllFriends)
        thunk.api.get = jest.fn().mockReturnValue(Promise.resolve({ data: { data: '' } }))

        const result = await thunk.callThunk('')

        expect(thunk.api.get).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual({ data: '' })
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(getAllFriends)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('')

        expect(thunk.api.get).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

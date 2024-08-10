import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchDialogs } from './fetchDialogs'

describe('fetchDialogs.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchDialogs)
        thunk.api.post = jest.fn().mockReturnValue(Promise.resolve({ data: { dialogs: [] } }))

        const result = await thunk.callThunk([])

        expect(thunk.api.post).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual([])
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchDialogs)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk([])

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

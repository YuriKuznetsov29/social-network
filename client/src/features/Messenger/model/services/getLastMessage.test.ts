import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { getLastMessage } from './getLastMessage'

describe('getLastMessage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(getLastMessage)
        thunk.api.post = jest.fn().mockReturnValue(Promise.resolve({ data: { data: '' } }))

        const result = await thunk.callThunk({
            roomId: '',
        })

        expect(thunk.api.post).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual({ data: '' })
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(getLastMessage)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({
            roomId: '',
        })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

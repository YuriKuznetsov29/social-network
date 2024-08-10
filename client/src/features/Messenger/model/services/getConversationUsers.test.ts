import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { getConversationUsers } from './getConversationUsers'

describe('addConversation.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(getConversationUsers)
        thunk.api.get = jest.fn().mockReturnValue(Promise.resolve({ data: { data: '' } }))

        const result = await thunk.callThunk({
            userId: '',
        })

        expect(thunk.api.get).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual({ data: '' })
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(getConversationUsers)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({
            userId: '',
        })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

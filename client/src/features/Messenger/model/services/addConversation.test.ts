import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { addConversation } from './addConversation'

describe('addConversation.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addConversation)
        thunk.api.patch = jest.fn().mockReturnValue(Promise.resolve({ data: { data: '' } }))

        const result = await thunk.callThunk({
            userId: '',
            friendId: '',
            roomId: '',
            navigate: () => {},
        })

        expect(thunk.api.patch).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(addConversation)
        thunk.api.patch.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({
            userId: '',
            friendId: '',
            roomId: '',
            navigate: () => {},
        })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

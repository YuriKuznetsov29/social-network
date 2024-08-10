import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { getConversationUsers } from './getConversationUsers'
import { getLastMessage } from './getLastMessage'
import { removeConversation } from './removeConversation'

describe('removeConversation.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(removeConversation)
        thunk.api.patch = jest.fn().mockReturnValue(Promise.resolve({ data: { data: '' } }))

        const result = await thunk.callThunk({ userId: '', companionId: '', roomId: '' })

        expect(thunk.api.patch).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(removeConversation)
        thunk.api.patch.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({ userId: '', companionId: '', roomId: '' })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

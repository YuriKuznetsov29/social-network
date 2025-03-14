import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { removeFriend } from './removeFriend'

describe('removeFriend.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(removeFriend)
        thunk.api.patch = jest.fn().mockReturnValue(Promise.resolve({ data: { data: '' } }))

        const result = await thunk.callThunk({
            friendLastName: 'test',
            friendId: '65232001e84843c3b5a6404e',
            friendFirstName: 'user1',
            userId: '',
        })

        expect(thunk.api.patch).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(removeFriend)
        thunk.api.patch.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({
            friendLastName: 'test',
            friendId: '65232001e84843c3b5a6404e',
            friendFirstName: 'user1',
            userId: '',
        })

        expect(thunk.api.patch).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

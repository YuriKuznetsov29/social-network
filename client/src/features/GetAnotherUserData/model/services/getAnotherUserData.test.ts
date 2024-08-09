import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { getAnotherUserData } from './getAnotherUserData'

const user = {
    userId: '65232001e84843c3b5a6404e',
    email: 't1@t.ru',
    firstName: 'user1',
    lastName: 'test',
    gender: 'male' as const,
    friends: ['6522827ffc4a6ed03b4ed591', '652300bd64b711977f2da704'],
    posts: 0,
    birthDay: '31.02.1914',
    conversations: [
        {
            roomId: '5ZZdBcfcm_T2kjbB4BEwO',
            friendId: '6522827ffc4a6ed03b4ed591',
            _id: '652856481b7fa59bd20a1546',
        },
        {
            roomId: 'Shy2v-dhz_5CrA8NpVNK2',
            friendId: '652300bd64b711977f2da704',
            _id: '654295ca07c5ae6839d846eb',
        },
    ],
    likes: [],
    isOnline: true,
    lastSeenOnline: '2023-10-09T11:32:28.594Z',
    city: 'Архангельск',
}

describe('getAnotherUserData.test', () => {
    test('test data acquisition', async () => {
        const thunk = new TestAsyncThunk(getAnotherUserData)
        thunk.api.get = jest.fn().mockReturnValue(Promise.resolve({ data: user }))

        const result = await thunk.callThunk({ userId: '65232001e84843c3b5a6404e' })

        expect(thunk.api.get).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(user)
    })
})

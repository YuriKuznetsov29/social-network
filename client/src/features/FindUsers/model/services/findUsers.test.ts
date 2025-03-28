import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { findUsers } from './findUsers'

const users = [
    {
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
    },
    {
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
    },
]

describe('findUsers.test', () => {
    test('test search', async () => {
        const thunk = new TestAsyncThunk(findUsers)
        thunk.api.post = jest.fn().mockReturnValue(Promise.resolve({ data: users }))

        const result = await thunk.callThunk({ firstName: 'user1', lastName: 'test' })

        expect(thunk.api.post).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(users)
    })

    test('test not found users', async () => {
        const thunk = new TestAsyncThunk(findUsers)
        thunk.api.post = jest.fn().mockReturnValue(Promise.resolve({ data: [] }))

        const result = await thunk.callThunk({ firstName: '', lastName: '' })

        expect(thunk.api.post).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual([])
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(findUsers)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({ firstName: '', lastName: '' })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

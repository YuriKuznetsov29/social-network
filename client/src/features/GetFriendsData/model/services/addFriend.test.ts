import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { addFriend } from './addFriend'

const data = {
    user: {
        userId: '6522827ffc4a6ed03b4ed591',
        email: 'm@m.ru',
        firstName: 'Юрий',
        lastName: 'Кузнецов',
        gender: 'male',
        friends: [
            '65232001e84843c3b5a6404e',
            '65263f87f69af76874170bdd',
            '6522e4ad64b711977f2d9875',
            '65341875f0e68dab8bd3058b',
            '653d3640243873429de3aa94',
            '652300bd64b711977f2da704',
            '65400d0b243873429de3b998',
        ],
        posts: 2,
        birthDay: '1994-05-29',
        avatarPath: 'b2f9b28c-4e5a-4a68-8e45-2f41871d7694.jpg',
        conversations: [
            {
                roomId: 'FOqkVnLKDN00-XdGAcf9_',
                friendId: '6522e4ad64b711977f2d9875',
                _id: '6522e60b64b711977f2d9938',
            },
            {
                roomId: '11nZrQHFqiUXvNL38QBls',
                friendId: '652300bd64b711977f2da704',
                _id: '652856351b7fa59bd20a14f9',
            },
            {
                roomId: '5ZZdBcfcm_T2kjbB4BEwO',
                friendId: '65232001e84843c3b5a6404e',
                _id: '652856481b7fa59bd20a1545',
            },
            {
                roomId: 'qo5lPRLsbiTVb6-8eTEHt',
                friendId: '65263f87f69af76874170bdd',
                _id: '652856701b7fa59bd20a1681',
            },
            {
                roomId: 'czofMi5kobuo-mZX5Ii-5',
                friendId: '65400d0b243873429de3b998',
                _id: '65400d8e243873429de3babc',
            },
            {
                roomId: 'lw6UWYNR4oSEyjxv-QmAR',
                friendId: '653d3640243873429de3aa94',
                _id: '658870a2668bcac8df945aad',
            },
        ],
        likes: [],
        isOnline: true,
        lastSeenOnline: '2024-08-07T22:52:34.939Z',
        city: 'Новодвинск',
    },
}

describe('findUsers.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addFriend)
        thunk.api.patch = jest.fn().mockReturnValue(Promise.resolve({ data: data }))

        const result = await thunk.callThunk({
            friendLastName: 'test',
            friendId: '65232001e84843c3b5a6404e',
            friendFirstName: 'user1',
            userId: '',
        })

        expect(thunk.api.patch).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(addFriend)
        thunk.api.patch.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({
            friendLastName: 'test',
            friendId: '65232001e84843c3b5a6404e',
            friendFirstName: 'user1',
            userId: '',
        })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

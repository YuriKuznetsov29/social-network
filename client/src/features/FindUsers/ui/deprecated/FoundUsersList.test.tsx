import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { FoundUsersList } from './FoundUsersList'

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

describe('FoundUsersList.test', () => {
    test('test render users', async () => {
        componentRender(<FoundUsersList />, {
            initialState: {
                searchUsers: {
                    users,
                },
            },
        })

        const userName = await screen.findAllByText('user1')
        expect(userName[0]).toBeInTheDocument()
    })

    test('test render not found users', async () => {
        componentRender(<FoundUsersList />, {
            initialState: {
                searchUsers: {
                    users: [],
                },
            },
        })

        const notFound = await screen.findByTestId('not-found-users')
        expect(notFound).toBeInTheDocument()
    })

    test('test type event input', async () => {
        const user = userEvent.setup()

        componentRender(<FoundUsersList />)

        const input = screen.getByTestId('search-input')

        await user.type(input, 'user1 test')

        expect(screen.queryByTestId('search-input')).toContainHTML('user1 test')
    })
})

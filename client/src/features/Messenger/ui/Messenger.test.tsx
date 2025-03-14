import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/dom'

import { Messenger } from './Messenger'

const dialogs = [
    {
        message: {
            _id: '65a66a0946a4cff809ccf918',
            messageId: 'dLIlFC24p0Xv0qVTDa0Sq',
            textOrPathToFile: '321',
            roomId: 'FOqkVnLKDN00-XdGAcf9_',
            author: '6522e4ad64b711977f2d9875',
            createdAt: '2024-01-16T11:35:37.415Z',
            updatedAt: '2024-01-16T11:35:37.415Z',
            __v: 0,
            userId: '6522e4ad64b711977f2d9875',
            user: [
                {
                    _id: '6522e4ad64b711977f2d9875',
                    firstName: 'Барсик',
                    lastName: 'Барсик',
                    email: 'b@b.ru',
                    password: '$2a$12$ZFZG2kj6z6tY/WNpOV/H5eegQGCb5MiV.3t5pDc8AliuRDAk/dYtS',
                    birthDay: '15.04.2020',
                    gender: 'male',
                    friends: [
                        '652300bd64b711977f2da704',
                        '65263f87f69af76874170bdd',
                        '6522827ffc4a6ed03b4ed591',
                        '65400d0b243873429de3b998',
                    ],
                    posts: 4,
                    likes: [],
                    isOnline: false,
                    city: 'Новодвинск',
                    conversations: [
                        {
                            roomId: 'FOqkVnLKDN00-XdGAcf9_',
                            friendId: '6522827ffc4a6ed03b4ed591',
                            _id: '6522e60b64b711977f2d9937',
                        },
                        {
                            roomId: '9x4ctaIDwTtAwppvJl7QI',
                            friendId: '65263f87f69af76874170bdd',
                            _id: '65265709f69af76874170d4e',
                        },
                        {
                            roomId: 'M2b2EUjkiQE-9glZBai4Z',
                            friendId: '652300bd64b711977f2da704',
                            _id: '65285c881b7fa59bd20a20d5',
                        },
                    ],
                    lastSeenOnline: '2024-01-16T15:58:21.581Z',
                    createdAt: '2023-10-08T17:19:41.017Z',
                    updatedAt: '2024-01-16T15:58:21.582Z',
                    __v: 0,
                    avatarPath: '9999cf4c-b6f1-4139-baa6-95ebeaea30d4.jpg',
                },
            ],
        },
        companion: {
            _id: '6522e4ad64b711977f2d9875',
            firstName: 'Барсик',
            lastName: 'Барсик',
            email: 'b@b.ru',
            password: '$2a$12$ZFZG2kj6z6tY/WNpOV/H5eegQGCb5MiV.3t5pDc8AliuRDAk/dYtS',
            birthDay: '15.04.2020',
            gender: 'male',
            friends: [
                '652300bd64b711977f2da704',
                '65263f87f69af76874170bdd',
                '6522827ffc4a6ed03b4ed591',
                '65400d0b243873429de3b998',
            ],
            posts: 4,
            likes: [],
            isOnline: false,
            city: 'Новодвинск',
            conversations: [
                {
                    roomId: 'FOqkVnLKDN00-XdGAcf9_',
                    friendId: '6522827ffc4a6ed03b4ed591',
                    _id: '6522e60b64b711977f2d9937',
                },
                {
                    roomId: '9x4ctaIDwTtAwppvJl7QI',
                    friendId: '65263f87f69af76874170bdd',
                    _id: '65265709f69af76874170d4e',
                },
                {
                    roomId: 'M2b2EUjkiQE-9glZBai4Z',
                    friendId: '652300bd64b711977f2da704',
                    _id: '65285c881b7fa59bd20a20d5',
                },
            ],
            lastSeenOnline: '2024-01-16T15:58:21.581Z',
            createdAt: '2023-10-08T17:19:41.017Z',
            updatedAt: '2024-01-16T15:58:21.582Z',
            __v: 0,
            avatarPath: '9999cf4c-b6f1-4139-baa6-95ebeaea30d4.jpg',
        },
        conversation: {
            roomId: 'FOqkVnLKDN00-XdGAcf9_',
            friendId: '6522e4ad64b711977f2d9875',
        },
    },
    {
        message: {
            _id: '65429f7207c5ae6839d84e75',
            messageId: '8LOB_jhrq9zVeksge3BtC',
            textOrPathToFile: '123',
            roomId: '11nZrQHFqiUXvNL38QBls',
            author: '6522827ffc4a6ed03b4ed591',
            createdAt: '2023-11-01T18:56:50.313Z',
            updatedAt: '2023-11-01T18:56:50.313Z',
            __v: 0,
            userId: '6522827ffc4a6ed03b4ed591',
            user: [
                {
                    _id: '6522827ffc4a6ed03b4ed591',
                    firstName: 'Юрий',
                    lastName: 'Кузнецов',
                    email: 'm@m.ru',
                    password: '$2a$12$06xT.csLqnX3GwgsJOzCTO41btyY1a6OwTBsN97dbNmq/V7IZfPQW',
                    birthDay: '1994-05-29',
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
                    likes: [],
                    isOnline: true,
                    city: 'Новодвинск',
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
                    lastSeenOnline: '2024-08-10T05:46:32.347Z',
                    createdAt: '2023-10-08T10:20:47.378Z',
                    updatedAt: '2024-08-10T05:46:33.071Z',
                    __v: 0,
                    avatarPath: 'b2f9b28c-4e5a-4a68-8e45-2f41871d7694.jpg',
                },
            ],
        },
        companion: {
            _id: '652300bd64b711977f2da704',
            firstName: 'user',
            lastName: 'test',
            email: 't@t.ru',
            password: '$2a$12$26BlNZCz0rcz1gHM5RmTq.A6L.w7W7YKPXCCNA1/70CEp5X9tYIY6',
            birthDay: '22.11.1978',
            gender: 'male',
            friends: [
                '6522e4ad64b711977f2d9875',
                '65232001e84843c3b5a6404e',
                '65263f87f69af76874170bdd',
                '653d3640243873429de3aa94',
                '6522827ffc4a6ed03b4ed591',
            ],
            posts: 1,
            likes: [],
            isOnline: false,
            city: 'Москва',
            conversations: [
                {
                    roomId: '11nZrQHFqiUXvNL38QBls',
                    friendId: '6522827ffc4a6ed03b4ed591',
                    _id: '652856351b7fa59bd20a14fa',
                },
                {
                    roomId: 'M2b2EUjkiQE-9glZBai4Z',
                    friendId: '6522e4ad64b711977f2d9875',
                    _id: '65285c881b7fa59bd20a20d4',
                },
                {
                    roomId: 'Shy2v-dhz_5CrA8NpVNK2',
                    friendId: '65232001e84843c3b5a6404e',
                    _id: '654295ca07c5ae6839d846ea',
                },
            ],
            lastSeenOnline: '2024-08-02T16:36:15.217Z',
            createdAt: '2023-10-08T19:19:25.005Z',
            updatedAt: '2024-08-02T16:36:15.217Z',
            __v: 0,
        },
        conversation: {
            roomId: '11nZrQHFqiUXvNL38QBls',
            friendId: '652300bd64b711977f2da704',
        },
    },
]

describe('FoundUsersList.test', () => {
    // test('test render users', async () => {
    //     const component = componentRender(<Messenger />, {
    //         initialState: {
    //             messenger: {
    //                 ids: ['FOqkVnLKDN00-XdGAcf9_'],
    //                 entities: {
    //                     'FOqkVnLKDN00-XdGAcf9_': {
    //                         id: 'FOqkVnLKDN00-XdGAcf9_',
    //                         message: {
    //                             // _id:"65a66a0946a4cff809ccf918",
    //                             messageId: 'dLIlFC24p0Xv0qVTDa0Sq',
    //                             textOrPathToFile: '321',
    //                             roomId: 'FOqkVnLKDN00-XdGAcf9_',
    //                             author: '6522e4ad64b711977f2d9875',
    //                             createdAt: '2024-01-16T11:35:37.415Z',
    //                             // updatedAt:"2024-01-16T11:35:37.415Z",
    //                             // __v:0,
    //                             // userId:"6522e4ad64b711977f2d9875"
    //                             user: [
    //                                 {
    //                                     firstName: 'Барсик',
    //                                     lastName: 'Барсик',
    //                                     email: 'b@b.ru',
    //                                     password:
    //                                         '$2a$12$ZFZG2kj6z6tY/WNpOV/H5eegQGCb5MiV.3t5pDc8AliuRDAk/dYtS',
    //                                     birthDay: '15.04.2020',
    //                                     gender: 'male',
    //                                     posts: 4,
    //                                     isOnline: false,
    //                                     city: 'Новодвинск',
    //                                     lastSeenOnline: '2024-01-16T15:58:21.581Z',
    //                                     avatarPath: '9999cf4c-b6f1-4139-baa6-95ebeaea30d4.jpg',
    //                                 },
    //                             ],
    //                         },
    //                         companion: {
    //                             // _id:"6522e4ad64b711977f2d9875",
    //                             firstName: 'Барсик',
    //                             lastName: 'Барсик',
    //                             email: 'b@b.ru',
    //                             password:
    //                                 '$2a$12$ZFZG2kj6z6tY/WNpOV/H5eegQGCb5MiV.3t5pDc8AliuRDAk/dYtS',
    //                             birthDay: '15.04.2020',

    //                             posts: 4,
    //                             isOnline: false,
    //                             city: 'Новодвинск',
    //                             lastSeenOnline: '2024-01-16T15:58:21.581Z',
    //                             // createdAt:"2023-10-08T17:19:41.017Z",
    //                             // updatedAt:"2024-01-16T15:58:21.582Z",
    //                             // __v:0,
    //                             avatarPath: '9999cf4c-b6f1-4139-baa6-95ebeaea30d4.jpg',
    //                             gender: 'male',
    //                         },
    //                         conversation: {
    //                             roomId: 'FOqkVnLKDN00-XdGAcf9_',
    //                             friendId: '6522e4ad64b711977f2d9875',
    //                         },
    //                     },
    //                 },
    //             },
    //             user: {
    //                 userData: {
    //                     conversations: [{}, {}],
    //                 },
    //             },
    //         },
    //     })

    //     const avatar = await screen.findAllByTestId('name')

    //     expect(avatar[0]).toBeInTheDocument()

    //     // const userName = await screen.findAllByText('user1')
    //     // expect(userName[0]).toBeInTheDocument()
    // })

    test('test render', async () => {
        componentRender(<Messenger />, {
            initialState: {
                searchUsers: {
                    users: [],
                },
            },
        })

        const notFound = await screen.findByText('У вас еще нет диалогов')
        expect(notFound).toBeInTheDocument()
    })
})

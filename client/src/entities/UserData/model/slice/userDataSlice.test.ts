import { IUser } from '../types/IUser'
import { UserDataSchema } from '../types/userDataSchema'
import { userDataActions, userDataReducer } from './userDataSlice'

const userData: IUser = {
    userId: '65232001e84843c3b5a6404e',
    email: 't1@t.ru',
    firstName: 'user1',
    lastName: 'test',
    gender: 'male',
    friends: ['6522827ffc4a6ed03b4ed591', '652300bd64b711977f2da704'],
    posts: 0,
    birthDay: '31.02.1914',
    conversations: [
        {
            roomId: '5ZZdBcfcm_T2kjbB4BEwO',
            friendId: '6522827ffc4a6ed03b4ed591',
        },
        {
            roomId: 'Shy2v-dhz_5CrA8NpVNK2',
            friendId: '652300bd64b711977f2da704',
        },
    ],
    likes: [],
    isOnline: true,
    lastSeenOnline: '2023-10-09T11:32:28.594Z',
    city: 'Архангельск',
    password: '',
    avatarPath: '',
}

describe('userDataSlice test', () => {
    test('test set initAuth', () => {
        const state: DeepPartial<UserDataSchema> = { userData: {} }
        expect(
            userDataReducer(state as UserDataSchema, userDataActions.setUserData(userData))
        ).toEqual({
            userData,
        })
    })
})

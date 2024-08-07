import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { signInByEmail } from './singInByEmail'
import axios from 'axios'
import { loadUserData } from '@/entities/UserData'

const userData = {
    accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTIzMjAwMWU4NDg0M2MzYjVhNjQwNGUiLCJpYXQiOjE3MDIyMTIzNDUsImV4cCI6MTcwMjIxNTk0NX0.anzIVFBD-4RePXr0NUjZb2aaNXxRcwYL4evbtM5Iz7E',
    refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTIzMjAwMWU4NDg0M2MzYjVhNjQwNGUiLCJpYXQiOjE3MDIyMTIzNDV9.DLPalyc2NhDHUOmTN29IqUok8OONtupgG0Q1SIP0Ilk',
    expiresIn: '30d',
    user: {
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
}

const mockedAxios = jest.mocked(axios)

describe('signInByEmail.test', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(signInByEmail)
        thunk.api.post = jest.fn().mockReturnValue(Promise.resolve({ data: userData }))

        const result = await thunk.callThunk({ email: 't1@t.ru', password: '12345678' })
        // console.log(result)
        expect(thunk.api.post).toHaveBeenCalled()
        // console.log(thunk.api.post.mock.calls)
        // expect(thunk.dispatch).toHaveBeenNthCalledWith(
        //     2,
        //     loadUserData({ userId: userData.user.userId })
        // )

        expect(thunk.api.post).toHaveReturnedWith(Promise.resolve({ data: userData }))

        // первый вызов dispatch при вызове signInByEmail, второй вызов внутри asyncthunk с экшеном loadUserData, третий при успешном выполнении signInByEmail(то есть при статусе fulfilled)

        // const dispatch = jest.fn()
        // const getState = jest.fn()

        // mockedAxios.post = jest.fn().mockImplementation(() => Promise.resolve({ data: userData }))

        // const action = signInByEmail({ email: 't1@t.ru', password: '12345678' })

        // const result = await action(dispatch, getState, {
        //     api: mockedAxios,
        // })

        // expect(dispatch).toHaveBeenCalledTimes(3)

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(signInByEmail)
        thunk.api.post = jest.fn().mockReturnValue(Promise.resolve({}))

        const result = await thunk.callThunk({ email: 't1@t.ru', password: '12345678' })

        expect(thunk.api.post).toHaveBeenCalled()
        // expect(mockedAxios.post).toHaveBeenCalled()
        // первый вызов для signInByEmail, второй при неуспешном выполнении
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})

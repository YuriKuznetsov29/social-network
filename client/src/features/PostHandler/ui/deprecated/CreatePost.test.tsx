import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { screen } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

import { createPost } from '../../model/services/createPost'
import { CreatePost } from './CreatePost'

describe('FoundUsersList.test', () => {
    test('test render', async () => {
        const thunk = new TestAsyncThunk(createPost)
        thunk.api.post = jest
            .fn()
            .mockReturnValue(Promise.resolve({ data: { hasMore: false, posts: [] } }))

        // const result = await thunk.callThunk({ author: '', text: '', imagePath: '' })
        const user = userEvent.setup()
        componentRender(<CreatePost />, {
            initialState: {
                posts: {
                    _initialized: true,
                    isLoading: false,
                },
            },
        })

        const input = await screen.findByTestId('post-input')
        // const sendBtn = await screen.findByTestId('send')

        // await user.type(input, '123')
        // await user.click(sendBtn)

        // expect(thunk.api.post).toHaveBeenCalled()

        // expect(thunk.dispatch).toHaveBeenCalled()
        // expect(result.meta.requestStatus).toBe('fulfilled')
        // expect(result.payload).toEqual({ hasMore: false, posts: [] })

        // const notFound = await screen.findByText('У вас еще нет диалогов')
        expect(input).toBeInTheDocument()
    })
})

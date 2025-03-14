import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { createPost } from './createPost'

describe('createPost.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(createPost)
        thunk.api.post = jest
            .fn()
            .mockReturnValue(Promise.resolve({ data: { hasMore: false, posts: [] } }))

        const result = await thunk.callThunk({ author: '', text: '', imagePath: '' })

        expect(thunk.api.post).toHaveBeenCalled()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual({ hasMore: false, posts: [] })
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(createPost)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({ author: '', text: '', imagePath: '' })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})

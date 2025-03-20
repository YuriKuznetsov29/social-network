import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'

import { Comment } from './Comment'

describe('Comment', () => {
    test('test render', () => {
        componentRender(
            <Comment
                comment={{
                    _id: '123',
                    author: '123',
                    body: '123',
                    createdAt: new Date().toDateString(),
                    postId: '123',
                }}
            />
        )

        expect(screen.getByTestId('comment')).toBeInTheDocument()
        expect(screen.getByTestId('comment-text')).toHaveTextContent('123')
    })

    test('test time function', () => {
        const time = new Date(Date.now() - 3600 * 1000).toString()

        componentRender(
            <Comment
                comment={{
                    _id: '123',
                    author: '123',
                    body: '123',
                    createdAt: time,
                    postId: '123',
                }}
            />
        )

        expect(screen.getByTestId('time')).toHaveTextContent('час назад')
    })
})

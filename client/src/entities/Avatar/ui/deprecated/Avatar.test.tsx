import { componentRender } from '../../../../shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'

import { Avatar } from './Avatar'

describe('Avatar', () => {
    test('test render', () => {
        componentRender(<Avatar />)

        expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    test('test render with avatarPath', () => {
        componentRender(<Avatar avatarPath="123" />)

        expect(screen.getByTestId('user-avatar')).toBeInTheDocument()
    })

    test('test offline function', () => {
        const time = new Date(Date.now() - 3600 * 1000).toString()

        componentRender(
            <Avatar avatarPath="123" lastSeenOnline={time} isOnline={false} size="XL" />
        )

        expect(screen.getByTestId('lastSeenOnline')).toBeInTheDocument()
        expect(screen.getByTestId('lastSeenOnline')).toHaveTextContent('1 ч')
    })
})

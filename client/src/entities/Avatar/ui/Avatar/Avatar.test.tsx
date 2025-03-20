import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'

import { Avatar } from './Avatar'

describe('Avatar', () => {
    test('test render', () => {
        componentRender(<Avatar />, { featureFlags: { isAppRedesigned: true } })
        expect(screen.getByTestId('badge')).toBeInTheDocument()
    })

    test('test render with avatarPath', () => {
        componentRender(<Avatar avatarPath="123" />, { featureFlags: { isAppRedesigned: true } })

        expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    test('test online', async () => {
        componentRender(<Avatar avatarPath="123" isOnline={true} />, {
            featureFlags: { isAppRedesigned: true },
        })

        const badge = await screen.findByTestId('badge')
        expect(badge.lastChild).toHaveStyle(`display: block`)
    })
})

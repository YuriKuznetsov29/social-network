import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { SideBar } from './SideBar'

describe('navigation test', () => {
    test('test user link', async () => {
        componentRender(<SideBar />)
        const usersLink = screen.getByTestId('friends-link')
        userEvent.click(usersLink)
        screen.debug()
        expect(screen.getByTestId('friends-page')).toBeInTheDocument()
    })
})

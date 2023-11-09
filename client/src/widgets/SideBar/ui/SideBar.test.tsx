import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { SideBar } from './SideBar'
import { Route, Routes } from 'react-router'
import FriendsPage from 'pages/FriendsPage/ui/FriendsPage'
import { AppRouter } from 'app/router'

describe('navigation test', () => {
    test('test user link', async () => {
        componentRender(
            // <Routes>
            //     <Route path="/" element={<SideBar />} />
            //     <Route path="/friends" element={<FriendsPage />} />
            // </Routes>
            <AppRouter />,
            {
                route: '/friends',
                initialState: {
                    authForm: {
                        isAuth: true,
                        // isLoading: false, initAuth: true
                    },
                },
            }
        )
        const friendsPage = await screen.findByTestId('friends-page')
        screen.debug()
        // userEvent.click(usersLink)
        // screen.debug()
        expect(friendsPage).toBeInTheDocument()
    })
})

import { AppRouter } from '@/app/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen, waitFor } from '@testing-library/react'

const intersectionObserverMock = () => ({
    observe: () => null,
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock)

jest.mock('nanoid', () => {
    return {
        nanoid: () => Math.random().toString(),
    }
})

describe('navigation test', () => {
    test('test without authorization', async () => {
        componentRender(<AppRouter />, {
            route: '/',
            initialState: {
                authForm: {
                    isAuth: false,
                },
            },
            featureFlags: { isAppRedesigned: true },
        })
        const loginPage = await screen.findByTestId('login-form')
        expect(loginPage).toBeInTheDocument()
    })

    test('test render not found page', async () => {
        const res = componentRender(<AppRouter />, {
            route: '/gergreeern/*',
            initialState: {
                authForm: {
                    isAuth: true,
                },
            },
            featureFlags: { isAppRedesigned: true },
        })

        const notFoundPage = await screen.findByTestId('not-found')
        expect(notFoundPage).toBeInTheDocument()
    })

    test('test render friends page with authorization', async () => {
        componentRender(<AppRouter />, {
            route: '/friends',
            initialState: {
                authForm: {
                    isAuth: true,
                    isLoading: false,
                },
            },
            featureFlags: { isAppRedesigned: true },
        })
        screen.debug()
        await waitFor(() => expect(screen.getByTestId('friends-page')).toBeInTheDocument(), {
            timeout: 3000,
        })
        screen.debug()
        const friendsPage = await screen.findByTestId('friends-page')
        expect(friendsPage).toBeInTheDocument()
    })
})

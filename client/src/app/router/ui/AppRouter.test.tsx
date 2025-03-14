import { AppRouter } from '@/app/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'

describe('navigation test', () => {
    test('test without authorization', async () => {
        componentRender(<AppRouter />, {
            route: '/',
            initialState: {
                authForm: {
                    isAuth: false,
                },
            },
        })
        const loginPage = await screen.findByTestId('login-form')
        expect(loginPage).toBeInTheDocument()
    })

    test('test render not found page', async () => {
        const res = componentRender(<AppRouter />, {
            route: '/gergreeern',
            initialState: {
                authForm: {
                    isAuth: true,
                },
            },
        })

        console.log(res)
        const notFoundPage = await screen.findByTestId('not-found')
        expect(notFoundPage).toBeInTheDocument()
    })

    test('test render friends page with authorization', async () => {
        componentRender(<AppRouter />, {
            route: '/friends',
            initialState: {
                authForm: {
                    isAuth: true,
                },
            },
        })
        const friendsPage = await screen.findByTestId('friends-page')
        expect(friendsPage).toBeInTheDocument()
    })
})

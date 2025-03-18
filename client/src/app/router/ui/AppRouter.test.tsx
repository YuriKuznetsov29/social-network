import { AppRouter } from '@/app/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen, waitFor } from '@testing-library/react'

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
            route: '/gergreeern/*',
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
            route: '/news',
            initialState: {
                authForm: {
                    isAuth: true,
                    isLoading: false,
                },
            },
        })
        screen.debug()
        console.log('SCREEN')
        // await waitFor(() => expect(screen.getByTestId('news-page')).toBeInTheDocument(), {
        //     timeout: 3000,
        // })
        const friendsPage = await screen.findByTestId('news-page')
        console.log(friendsPage, 'friendsPage')
        expect(friendsPage).toBeInTheDocument()
    })
})

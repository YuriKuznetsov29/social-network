import { SignInForm, SignUpForm } from 'features/AuthByEmail'
import { MainPage } from 'pages/MainPage'
import { MessengerPage } from 'pages/MessengerPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Route, RouteProps } from 'react-router-dom'
import { Dialog } from 'widgets/Dialog'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    MESSENGER = 'messenger',
    DIALOG = 'dialog',
    SIGNUP = 'signUp',
    SIGNIN = 'signIn',
    // NEWS = 'news',
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: 'profile',
    [AppRoutes.MESSENGER]: 'messenger',
    [AppRoutes.DIALOG]: 'messenger/:id',
    [AppRoutes.SIGNUP]: '/signUp',
    [AppRoutes.SIGNIN]: '/signIn',
    // [AppRoutes.NEWS]: '/news',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <SignInForm />,
        // authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.MESSENGER]: {
        path: RoutePath.messenger,
        element: <MessengerPage />,
        authOnly: true,
    },
    [AppRoutes.DIALOG]: {
        path: RoutePath.dialog,
        element: <Dialog />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage />,
        // authOnly: true,
    },
    [AppRoutes.SIGNUP]: {
        path: RoutePath['signUp'],
        element: <SignUpForm />,
    },
    [AppRoutes.SIGNIN]: {
        path: RoutePath['signIn'],
        element: <SignInForm />,
    },
}

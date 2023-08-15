import { MainPage } from 'pages/MainPage'
import { MessengerPage } from 'pages/MessengerPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Route, RouteProps } from 'react-router-dom'
import { Dialog } from 'widgets/Dialog'

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    MESSENGER = 'messenger',
    DIALOG = 'dialog',
    // LOGIN = 'login',
    // NEWS = 'news',
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: 'profile',
    [AppRoutes.MESSENGER]: 'messenger',
    [AppRoutes.DIALOG]: 'messenger/:id',
    // [AppRoutes.LOGIN]: '/login',
    // [AppRoutes.NEWS]: '/news',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.MESSENGER]: {
        path: RoutePath.messenger,
        element: <MessengerPage />,
    },
    [AppRoutes.DIALOG]: {
        path: RoutePath.dialog,
        element: <Dialog />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage />,
    },
}

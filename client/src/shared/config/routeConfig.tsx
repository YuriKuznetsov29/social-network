import { ChangeUserDataForm, SignInForm, SignUpForm } from 'features/AuthByEmail'
import { AnotherUserPage } from 'pages/AnotherUserPage'
import { ChangeProfilePage } from 'pages/ChangeProfilePage'
import { ConversationPage } from 'pages/ConversationPage'
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
    CONVERSATION = 'conversation',
    SIGN_UP = 'signUp',
    SIGN_IN = 'signIn',
    CHANGE_PROFILE = 'changeProfile',
    ANOTHER_PROFILE = 'anotherProfile',
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: 'profile',
    [AppRoutes.MESSENGER]: 'messenger',
    [AppRoutes.CONVERSATION]: 'messenger/:roomId',
    [AppRoutes.SIGN_UP]: '/signUp',
    [AppRoutes.SIGN_IN]: '/signIn',
    [AppRoutes.CHANGE_PROFILE]: '/changeProfile',
    [AppRoutes.ANOTHER_PROFILE]: '/:anotherUserId',
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
    [AppRoutes.CONVERSATION]: {
        path: RoutePath.conversation,
        element: <ConversationPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage />,
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.signUp,
        element: <SignUpForm />,
    },
    [AppRoutes.SIGN_IN]: {
        path: RoutePath.signIn,
        element: <SignInForm />,
    },
    [AppRoutes.CHANGE_PROFILE]: {
        path: RoutePath.changeProfile,
        element: <ChangeProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ANOTHER_PROFILE]: {
        path: RoutePath.anotherProfile,
        element: <AnotherUserPage />,
        authOnly: true,
    },
}

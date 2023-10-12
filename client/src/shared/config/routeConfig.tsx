import { SignInForm, SignUpForm } from 'features/AuthByEmail'
import { AnotherUserPage } from 'pages/AnotherUserPage'
import { ChangeProfilePage } from 'pages/ChangeProfilePage'
import { ConversationPage } from 'pages/ConversationPage'
import { FriendsPage } from 'pages/FriendsPage'
import { MessengerPage } from 'pages/MessengerPage'
import { NewsPage } from 'pages/NewsPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    SIGN_UP = 'signUp',
    PROFILE = 'profile',
    MESSENGER = 'messenger',
    CONVERSATION = 'conversation',
    CHANGE_PROFILE = 'changeProfile',
    ANOTHER_PROFILE = 'anotherProfile',
    NEWS = 'news',
    FRIENDS = 'friends',
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.SIGN_UP]: '/signUp',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.MESSENGER]: '/messenger',
    [AppRoutes.CONVERSATION]: '/messenger/:roomId',
    [AppRoutes.CHANGE_PROFILE]: '/changeProfile',
    [AppRoutes.ANOTHER_PROFILE]: '/:anotherUserId',
    [AppRoutes.NEWS]: '/news',
    [AppRoutes.FRIENDS]: '/friends',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <SignInForm />,
        // authOnly: true,
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.signUp,
        element: <SignUpForm />,
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
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPage />,
        authOnly: true,
    },
    [AppRoutes.FRIENDS]: {
        path: RoutePath.friends,
        element: <FriendsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage />,
    },
}

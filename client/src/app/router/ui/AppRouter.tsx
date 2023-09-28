import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
// import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    const { isAuth } = useAppSelector(getAuthState)
    console.log(isAuth, 'auth')
    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false
                }

                return true
            }),
        [isAuth]
    )

    return (
        // <Suspense fallback={<PageLoader />}>
        <Routes>
            {routes.map(({ element, path }) => (
                <Route key={path} element={element} path={path} />
            ))}
        </Routes>
        // </Suspense>
    )
}

export default AppRouter

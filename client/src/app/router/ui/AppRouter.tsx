import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { Suspense, memo, useCallback, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { RequireAuth } from './RequireAuth'
// import { PageLoader } from 'widgets/PageLoader';

// const AppRouter = () => {
//     const { isAuth } = useAppSelector(getAuthState)

//     const routes = useMemo(
//         () =>
//             Object.values(routeConfig).filter((route) => {
//                 if (route.authOnly && !isAuth) {
//                     return false
//                 }

//                 return true
//             }),
//         [isAuth]
//     )

//     return (
//         // <Suspense fallback={<PageLoader />}>
//         <Routes>
//             {routes.map(({ element, path }) => (
//                 <Route key={path} element={element} path={path} />
//             ))}
//         </Routes>
//         // </Suspense>
//     )
// }

// export default AppRouter

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            // <Suspense fallback={<PageLoader />}>
            <>{route.element}</>
            // </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)

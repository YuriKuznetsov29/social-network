import { Suspense, memo, useCallback, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig'
import { RequireAuth } from './RequireAuth'
import { Loader } from 'shared/ui/Loader'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<Loader center />}>{route.element}</Suspense>

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

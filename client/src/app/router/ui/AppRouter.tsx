import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig'
import { Loader } from '@/shared/ui/Loader'
import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from './RequireAuth'

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

import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getAuthStatus, getLoadingAuthStatus } from '@/features/AuthByEmail'
import { Loader } from '@/shared/ui/Loader'

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAppSelector(getAuthStatus)
    const loadingAuth = useAppSelector(getLoadingAuthStatus)
    const location = useLocation()

    if (loadingAuth) return <Loader center />

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    return children
}

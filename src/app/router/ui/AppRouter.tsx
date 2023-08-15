import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
// import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    // <Suspense fallback={<PageLoader />}>
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
        ))}
    </Routes>
    // </Suspense>
)

export default AppRouter

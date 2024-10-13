import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { Loader } from '@/shared/ui/Loader';

const AppRouter = () => {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>
                            {route.element as JSX.Element}
                        </RequireAuth>
                    ) : (
                        route.element
                    )
                }
            />
        ),
        [],
    );

    return (
        <Suspense fallback={<Loader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};

export default memo(AppRouter);

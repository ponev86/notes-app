import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from 'app/providers/error-boundary';
import { routeConfig } from 'shared/config/route-config';
import { FallbackError } from 'widgets/fallback-error';
import { PageLoader } from 'widgets/page-loader';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="page-wrapper">
                <ErrorBoundary fallback={FallbackError}>
                  {element}
                </ErrorBoundary>
              </div>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

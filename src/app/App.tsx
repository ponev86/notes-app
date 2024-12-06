import { Suspense } from 'react';
import { AppRouter } from './providers/router';

function App() {
  return (
    <div className="app">
      <Suspense fallback="">
        <div className="content">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;

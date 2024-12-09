import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/header';

function App() {
  return (
    <div>
      <Suspense fallback="">
        <Header />
        <main className="content">
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}

export default App;

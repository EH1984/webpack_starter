import * as React from 'react';

// Store
import { GlobalProvider } from './context/GlobalState';

export const App: React.FC = () => {
  return (
    <GlobalProvider>
      <h1>App</h1>
    </GlobalProvider>
  );
};

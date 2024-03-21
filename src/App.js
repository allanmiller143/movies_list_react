
import React from 'react';
import AppRoutes from './AppRoutes/AppRoutes';
import Provider from './context/Provider';
function App() {
  return (
    <Provider>
      <AppRoutes/>
    </Provider>
  );
}

export default App;

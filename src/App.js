import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/navigation';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

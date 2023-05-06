import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/navigation';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
};

export default App;

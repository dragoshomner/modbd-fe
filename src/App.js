import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/navigation';
import Layout from './components/layout/Layout';
import RegionProvider from './data/context/RegionProvider';

const App = () => {
  return (
    <>
      <Layout>
        <RegionProvider>
          <RouterProvider router={router} />
        </RegionProvider>
      </Layout>
    </>
  );
};

export default App;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';
import { EmployeesList, HotelsList } from '../../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: 'employees',
        element: <EmployeesList />
      },
      {
        path: 'hotels',
        element: <HotelsList />
      }
    ]
  },
]);
  
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';
import { 
  EmployeesList, 
  EditEmployee,
  NewEmployee,
  HotelsList, 
  EditHotel, 
  NewHotel 
} from '../../pages';

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
        path: 'employees/:id',
        element: <EditEmployee />
      },
      {
        path: 'employees/new',
        element: <NewEmployee />
      },
      {
        path: 'hotels',
        element: <HotelsList />
      },
      {
        path: 'hotels/:id',
        element: <EditHotel />
      },
      {
        path: 'hotels/new',
        element: <NewHotel />
      },
    ]
  },
]);
  
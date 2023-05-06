import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';
import { 
  // employees
  EmployeesList, 
  EditEmployee,
  NewEmployee,
  // hotels
  HotelsList, 
  EditHotel, 
  NewHotel,
  // jobs
  JobsList,
  EditJob,
  NewJob,
  // rooms
  RoomsList,
  EditRoom,
  NewRoom,
} from '../../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      // employees
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
      // hotels
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
      // jobs
      {
        path: 'jobs',
        element: <JobsList />
      },
      {
        path: 'jobs/:id',
        element: <EditJob />
      },
      {
        path: 'jobs/new',
        element: <NewJob />
      },
      // rooms
      {
        path: 'rooms',
        element: <RoomsList />
      },
      {
        path: 'rooms/:id',
        element: <EditRoom />
      },
      {
        path: 'rooms/new',
        element: <NewRoom />
      },
    ]
  },
]);
  
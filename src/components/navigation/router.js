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
  // reservations
  ReservationsList,
  EditReservation,
  NewReservation,
  // clients
  ClientsList,
  EditClient,
  NewClient,
  // addresses,
  AddressesList,
  EditAddress,
  NewAddress,
  // cities
  CitiesList,
  EditCity,
  NewCity,
  // countries
  CountriesList,
  EditCountry,
  NewCountry
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
      // reservations
      {
        path: 'reservations',
        element: <ReservationsList />
      },
      {
        path: 'reservations/:id',
        element: <EditReservation />
      },
      {
        path: 'reservations/new',
        element: <NewReservation />
      },
      // clients
      {
        path: 'clients',
        element: <ClientsList />
      },
      {
        path: 'clients/:id',
        element: <EditClient />
      },
      {
        path: 'clients/new',
        element: <NewClient />
      },
      // addresses
      {
        path: 'addresses',
        element: <AddressesList />
      },
      {
        path: 'addresses/:id',
        element: <EditAddress />
      },
      {
        path: 'addresses/new',
        element: <NewAddress />
      },
      // cities
      {
        path: 'cities',
        element: <CitiesList />
      },
      {
        path: 'cities/:id',
        element: <EditCity />
      },
      {
        path: 'cities/new',
        element: <NewCity />
      },
      // countries
      {
        path: 'countries',
        element: <CountriesList />
      },
      {
        path: 'countries/:id',
        element: <EditCountry />
      },
      {
        path: 'countries/new',
        element: <NewCountry />
      },
    ]
  },
]);
  
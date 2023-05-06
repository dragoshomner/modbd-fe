import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ReservationsTable } from '../../components/tables/ReservationsTable';
import { rows } from '../../__mocks__/reservations.mock';

export const ReservationsList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/reservations/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <ReservationsTable rows={rows} />
    </>
  );
};
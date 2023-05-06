import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { HotelsTable } from '../../components/tables/HotelsTable';
import { rows } from '../../__mocks__/hotels.mock';

export const HotelsList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/hotels/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <HotelsTable rows={rows} />
    </>
  );
};
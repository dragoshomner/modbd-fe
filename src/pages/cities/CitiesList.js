import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CitiesTable } from '../../components/tables/CitiesTable';
import { rows } from '../../__mocks__/cities.mock';

export const CitiesList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/cities/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <CitiesTable rows={rows} />
    </>
  );
};
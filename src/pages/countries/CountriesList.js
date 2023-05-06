import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CountriesTable } from '../../components/tables/CountriesTable';
import { rows } from '../../__mocks__/countries.mock';

export const CountriesList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/countries/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <CountriesTable rows={rows} />
    </>
  );
};
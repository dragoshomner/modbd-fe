import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AddressesTable } from '../../components/tables/AddressesTable';
import { rows } from '../../__mocks__/addresses.mock';

export const AddressesList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/addresses/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <AddressesTable rows={rows} />
    </>
  );
};
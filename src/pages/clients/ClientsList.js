import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ClientsTable } from '../../components/tables/ClientsTable';
import { rows } from '../../__mocks__/clients.mock';

export const ClientsList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/clients/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <ClientsTable rows={rows} />
    </>
  );
};
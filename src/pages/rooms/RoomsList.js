import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RoomsTable } from '../../components/tables/RoomsTable';
import { rows } from '../../__mocks__/rooms.mock';

export const RoomsList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/rooms/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <RoomsTable rows={rows} />
    </>
  );
};
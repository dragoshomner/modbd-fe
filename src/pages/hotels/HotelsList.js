import React from 'react';
import { HotelsTable } from '../../components/tables/HotelsTable';
import { rows } from '../../__mocks__/hotels.mock';

export const HotelsList = () => {
  return (
    <HotelsTable rows={rows} />
  );
};
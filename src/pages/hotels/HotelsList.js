import React from 'react';
import { HotelsTable } from '../../components/tables/HotelsTable';
import { rows } from '../../__mocks__/hotels.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const HotelsList = () => {
  return (
    <>
      <ListHeader createLinkEntity="hotels" />
      <HotelsTable rows={rows} />
    </>
  );
};
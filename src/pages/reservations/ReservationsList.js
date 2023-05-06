import React from 'react';
import { ReservationsTable } from '../../components/tables/ReservationsTable';
import { rows } from '../../__mocks__/reservations.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const ReservationsList = () => {
  return (
    <>
      <ListHeader createLinkEntity="reservations" />
      <ReservationsTable rows={rows} />
    </>
  );
};
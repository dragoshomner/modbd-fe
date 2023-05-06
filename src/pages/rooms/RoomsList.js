import React from 'react';
import { RoomsTable } from '../../components/tables/RoomsTable';
import { rows } from '../../__mocks__/rooms.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const RoomsList = () => {
  return (
    <>
      <ListHeader createLinkEntity="rooms" />
      <RoomsTable rows={rows} />
    </>
  );
};
import React from 'react';
import { AddressesTable } from '../../components/tables/AddressesTable';
import { rows } from '../../__mocks__/addresses.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const AddressesList = () => {
  return (
    <>
      <ListHeader createLinkEntity="addresses" />
      <AddressesTable rows={rows} />
    </>
  );
};
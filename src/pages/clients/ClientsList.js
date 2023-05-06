import React from 'react';
import { ClientsTable } from '../../components/tables/ClientsTable';
import { rows } from '../../__mocks__/clients.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const ClientsList = () => {
  return (
    <>
      <ListHeader createLinkEntity="clients" />
      <ClientsTable rows={rows} />
    </>
  );
};
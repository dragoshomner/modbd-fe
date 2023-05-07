import React, { useEffect, useContext } from 'react';
import { ClientsTable } from '../../components/tables/ClientsTable';
import { rows as mockedRows } from '../../__mocks__/clients.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllClients } from '../../data/requests/clients';
import { isSuccessful } from '../../data/requests/response';

export const ClientsList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const response = fetchAllClients(region);
    // TODO: mockedRows must me replaced with []
    const rows = isSuccessful(response) ? response.data : mockedRows;
    setRows(rows);
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="clients" />
      <ClientsTable rows={rows} />
    </>
  );
};
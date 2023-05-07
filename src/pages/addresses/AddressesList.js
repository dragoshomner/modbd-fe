import React, { useEffect, useContext } from 'react';
import { AddressesTable } from '../../components/tables/AddressesTable';
import { rows as mockedRows } from '../../__mocks__/addresses.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllAddresess } from '../../data/requests/addresses';
import { isSuccessful } from '../../data/requests/response';

export const AddressesList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const response = fetchAllAddresess(region);
    // TODO: mockedRows must me replaced with []
    const rows = isSuccessful(response) ? response.data : mockedRows;
    setRows(rows);
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="addresses" />
      <AddressesTable rows={rows} />
    </>
  );
};
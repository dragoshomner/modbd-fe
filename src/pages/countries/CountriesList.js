import React, { useEffect, useContext } from 'react';
import { CountriesTable } from '../../components/tables/CountriesTable';
import { rows as mockedRows } from '../../__mocks__/countries.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllCountries } from '../../data/requests/countries';
import { isSuccessful } from '../../data/requests/response';

export const CountriesList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const response = fetchAllCountries(region);
    // TODO: mockedRows must me replaced with []
    const rows = isSuccessful(response) ? response.data : mockedRows;
    setRows(rows);
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="countries" />
      <CountriesTable rows={rows} />
    </>
  );
};
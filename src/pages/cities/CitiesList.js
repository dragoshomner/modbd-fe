import React, { useEffect, useContext } from 'react';
import { CitiesTable } from '../../components/tables/CitiesTable';
import { rows as mockedRows } from '../../__mocks__/cities.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllCities } from '../../data/requests/cities';
import { isSuccessful } from '../../data/requests/response';

export const CitiesList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchAllCities(region).then((response) => {
    // TODO: mockedRows must me replaced with []
      const rows = isSuccessful(response) ? response.data : mockedRows;
      setRows(rows);
    });
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="cities" />
      <CitiesTable rows={rows} />
    </>
  );
};
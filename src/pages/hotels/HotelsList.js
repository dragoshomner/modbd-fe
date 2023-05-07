import React, { useEffect, useContext } from 'react';
import { HotelsTable } from '../../components/tables/HotelsTable';
import { rows as mockedRows } from '../../__mocks__/hotels.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllHotels } from '../../data/requests/hotels';
import { isSuccessful } from '../../data/requests/response';

export const HotelsList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const response = fetchAllHotels(region);
    // TODO: mockedRows must me replaced with []
    const rows = isSuccessful(response) ? response.data : mockedRows;
    setRows(rows);
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="hotels" />
      <HotelsTable rows={rows} />
    </>
  );
};
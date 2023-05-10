import React, { useEffect, useContext } from 'react';
import { RoomsTable } from '../../components/tables/RoomsTable';
import { rows as mockedRows } from '../../__mocks__/rooms.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllRooms } from '../../data/requests/rooms';
import { isSuccessful } from '../../data/requests/response';

export const RoomsList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchAllRooms(region).then((response) => {
      // TODO: mockedRows must me replaced with []
      const rows = isSuccessful(response) ? response.data : mockedRows;
      setRows(rows);
    });
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="rooms" />
      <RoomsTable rows={rows} />
    </>
  );
};
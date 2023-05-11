import React, { useEffect, useContext } from 'react';
import { ReservationsTable } from '../../components/tables/ReservationsTable';
import { rows as mockedRows } from '../../__mocks__/reservations.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllReservations } from '../../data/requests/reservations';
import { isSuccessful } from '../../data/requests/response';

export const ReservationsList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchAllReservations(region).then((response) => {
      // TODO: mockedRows must me replaced with []
      const rows = isSuccessful(response) ? response.data : mockedRows;
      setRows(rows);
    });
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="reservations" />
      <ReservationsTable rows={rows} />
    </>
  );
};
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from '../../components/forms/ReservationForm';
import { rows } from '../../__mocks__/reservations.mock';

export const EditReservation = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    const myDataRaw = rows.find(row => row.id === Number(params.id));
    // eslint-disable-next-line no-unused-vars
    const { id, ...myData } = myDataRaw;
    setData(myData);
  }, []);
    
  const onSubmit = data => console.log('Edit data', data);
    
  return (
    <>
        <h1>Edit Reservation</h1>
        <ReservationForm data={data} onSubmit={onSubmit} />
    </>
  );
};

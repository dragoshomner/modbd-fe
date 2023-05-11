import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from '../../components/forms/ReservationForm';
import { rows } from '../../__mocks__/reservations.mock';
import { fetchReservationById, updateReservation } from '../../data/requests/reservations';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const EditReservation = () => {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchReservationById(region, params.id).then(roomResponse => {
      const myDataRaw = isSuccessful(roomResponse) ? 
        roomResponse.data : 
        rows.find(row => row.id === Number(params.id));
      // eslint-disable-next-line no-unused-vars
      const { id, ...myData } = myDataRaw;
      setData(myData);
    });
  }, []);
    
  const onSubmit = async (data) => {
    console.log('Edit data', data);
    const response = await updateReservation(region, params.id, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.data.message });
    }
    else {
      setAlert({ severity: 'error', message: response.data.message });
    }
  };
    
  return (
    <>
        <h1>Edit Reservation</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <ReservationForm data={data} onSubmit={onSubmit} />
    </>
  );
};

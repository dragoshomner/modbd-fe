import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import HotelForm from '../../components/forms/HotelForm';
import { rows } from '../../__mocks__/hotels.mock';
import { fetchHotelById, updateHotel } from '../../data/requests/hotels';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const EditHotel = () => {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const roomResponse = fetchHotelById(region, params.id);
    const myDataRaw = isSuccessful(roomResponse) ? 
      roomResponse.data : 
      rows.find(row => row.id === Number(params.id));
    // eslint-disable-next-line no-unused-vars
    const { id, ...myData } = myDataRaw;
    setData(myData);
  }, []);
    
  const onSubmit = async (data) => {
    console.log('Edit data', data);
    const response = await updateHotel(region, params.id, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.message });
    }
    else {
      setAlert({ severity: 'error', message: response.message });
    }
  };
    
  return (
    <>
        <h1>Edit Hotel</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <HotelForm data={data} onSubmit={onSubmit} />
    </>
  );
};

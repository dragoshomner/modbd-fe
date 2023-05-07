import React, { useState, useContext } from 'react';
import HotelForm from '../../components/forms/HotelForm';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { createHotel } from '../../data/requests/hotels';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';

export const NewHotel = () => {
  const [alert, setAlert] = useState({});
  const { region } = useContext(RegionContext);
  
  const onSubmit = async (data) => {
    console.log('New data', data);
    const response = await createHotel(region, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.message });
    }
    else {
      setAlert({ severity: 'error', message: response.message });
    }
  };
    
  return (
    <>
        <h1>New Hotel</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <HotelForm onSubmit={onSubmit} />
    </>
  );
};

import React, { useState, useContext } from 'react';
import CountryForm from '../../components/forms/CountryForm';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { createCountry } from '../../data/requests/countries';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';

export const NewCountry = () => {
  const [alert, setAlert] = useState({});
  const { region } = useContext(RegionContext);
  
  const onSubmit = async (data) => {
    console.log('New data', data);
    const response = await createCountry(region, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.data.message });
    }
    else {
      setAlert({ severity: 'error', message: response.data.message });
    }
  };
    
  return (
    <>
        <h1>New Country</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <CountryForm onSubmit={onSubmit} />
    </>
  );
};

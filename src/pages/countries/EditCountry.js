import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CountryForm from '../../components/forms/CountryForm';
import { rows } from '../../__mocks__/countries.mock';
import { fetchCountryById, updateCountry } from '../../data/requests/countries';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const EditCountry = () => {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchCountryById(region, params.id).then(roomResponse => {
      const myDataRaw = isSuccessful(roomResponse) ? 
        roomResponse.data : 
        rows.find(row => row.id === Number(params.id));
      // eslint-disable-next-line no-unused-vars
      const { countryId, ...myData } = myDataRaw;
      setData(myData);
    });
  }, []);
    
  const onSubmit = async (data) => {
    console.log('Edit data', data);
    const response = await updateCountry(region, params.id, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.data.message });
    }
    else {
      setAlert({ severity: 'error', message: response.data.message });
    }
  };
    
  return (
    <>
        <h1>Edit Country</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <CountryForm data={data} onSubmit={onSubmit} />
    </>
  );
};

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ClientForm from '../../components/forms/ClientForm';
import { rows } from '../../__mocks__/clients.mock';
import { fetchClientById, updateClient } from '../../data/requests/clients';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const EditClient = () => {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const roomResponse = fetchClientById(region, params.id);
    const myDataRaw = isSuccessful(roomResponse) ? 
      roomResponse.data : 
      rows.find(row => row.id === Number(params.id));
    // eslint-disable-next-line no-unused-vars
    const { id, ...myData } = myDataRaw;
    setData(myData);
  }, []);
    
  const onSubmit = async (data) => {
    console.log('Edit data', data);
    const response = await updateClient(region, params.id, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.message });
    }
    else {
      setAlert({ severity: 'error', message: response.message });
    }
  };
    
  return (
    <>
        <h1>Edit Client</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <ClientForm data={data} onSubmit={onSubmit} />
    </>
  );
};

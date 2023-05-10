import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AddressForm from '../../components/forms/AddressForm';
import { rows } from '../../__mocks__/addresses.mock';
import { fetchAddressById, updateAddress } from '../../data/requests/addresses';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const EditAddress = () => {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchAddressById(region, params.id).then(roomResponse => {
      const myDataRaw = isSuccessful(roomResponse) ? 
        roomResponse.data : 
        rows.find(row => row.id === Number(params.id));
      // eslint-disable-next-line no-unused-vars
      const { addressId, ...myData } = myDataRaw;
      setData(myData);
    });
  }, []);
    
  const onSubmit = async (data) => {
    console.log('Edit data', data);
    const response = await updateAddress(region, params.id, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.data.message });
    }
    else {
      setAlert({ severity: 'error', message: response.data.message });
    }
  };
    
  return (
    <>
        <h1>Edit Address</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <AddressForm data={data} onSubmit={onSubmit} />
    </>
  );
};

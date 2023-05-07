import React, { useState, useContext } from 'react';
import JobForm from '../../components/forms/JobForm';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { createJob } from '../../data/requests/jobs';
import { RegionContext } from '../../data/context/RegionProvider';
import { isSuccessful } from '../../data/requests/response';

export const NewJob = () => {
  const [alert, setAlert] = useState({});
  const { region } = useContext(RegionContext);
  
  const onSubmit = async (data) => {
    console.log('New data', data);
    const response = await createJob(region, data);
    if (isSuccessful(response)) {
      setAlert({ severity: 'success', message: response.message });
    }
    else {
      setAlert({ severity: 'error', message: response.message });
    }
  };
    
  return (
    <>
        <h1>New Job</h1>
        { alert.message && (
          <Stack sx={{ width: '100%', marginBottom: 2 }} spacing={2}>
            <Alert severity={alert.severity}>
              { alert.message }
            </Alert>
          </Stack>
        )}
        <JobForm onSubmit={onSubmit} />
    </>
  );
};

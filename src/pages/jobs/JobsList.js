import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { JobsTable } from '../../components/tables/JobsTable';
import { rows } from '../../__mocks__/jobs.mock';

export const JobsList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/jobs/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <JobsTable rows={rows} />
    </>
  );
};
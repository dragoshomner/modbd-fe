import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { EmployeesTable } from '../../components/tables/EmployeesTable.js';
import { rows } from '../../__mocks__/employees.mock';

export const EmployeesList = () => {
  return (
    <>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/employees/new'} 
        style={{marginBottom: 10}}>
          Create
      </Button>
      <EmployeesTable rows={rows} />
    </>
  );
};
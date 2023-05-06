import React from 'react';
import { EmployeesTable } from '../../components/tables/EmployeesTable.js';
import { rows } from '../../__mocks__/employees.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const EmployeesList = () => {
  return (
    <>
      <ListHeader createLinkEntity="employees" />
      <EmployeesTable rows={rows} />
    </>
  );
};
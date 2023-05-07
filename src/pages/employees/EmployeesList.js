import React, { useEffect, useContext } from 'react';
import { EmployeesTable } from '../../components/tables/EmployeesTable.js';
import { rows as mockedRows } from '../../__mocks__/employees.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllEmployees } from '../../data/requests/employees';
import { isSuccessful } from '../../data/requests/response';

export const EmployeesList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    const response = fetchAllEmployees(region);
    // TODO: mockedRows must me replaced with []
    const rows = isSuccessful(response) ? response.data : mockedRows;
    setRows(rows);
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="employees" />
      <EmployeesTable rows={rows} />
    </>
  );
};
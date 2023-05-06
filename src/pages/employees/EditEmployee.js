import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeForm from '../../components/forms/EmployeeForm';
import { rows } from '../../__mocks__/employees.mock';

export const EditEmployee = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    const myDataRaw = rows.find(row => row.id === Number(params.id));
    // eslint-disable-next-line no-unused-vars
    const { id, ...myData } = myDataRaw;
    setData(myData);
  }, []);
    
  const onSubmit = data => console.log('Edit data', data);
    
  return (
    <>
        <h1>Edit </h1>
        <EmployeeForm data={data} onSubmit={onSubmit} />
    </>
  );
};

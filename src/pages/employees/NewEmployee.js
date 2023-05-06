import React from 'react';
import EmployeeForm from '../../components/forms/EmployeeForm';

export const NewEmployee = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Employee</h1>
        <EmployeeForm onSubmit={onSubmit} />
    </>
  );
};

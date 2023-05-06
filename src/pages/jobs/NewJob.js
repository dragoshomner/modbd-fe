import React from 'react';
import JobForm from '../../components/forms/JobForm';

export const NewJob = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Job</h1>
        <JobForm onSubmit={onSubmit} />
    </>
  );
};

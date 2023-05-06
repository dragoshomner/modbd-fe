import React from 'react';
import ClientForm from '../../components/forms/ClientForm';

export const NewClient = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Client</h1>
        <ClientForm onSubmit={onSubmit} />
    </>
  );
};

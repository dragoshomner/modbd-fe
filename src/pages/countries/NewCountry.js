import React from 'react';
import CountryForm from '../../components/forms/CountryForm';

export const NewCountry = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Country</h1>
        <CountryForm onSubmit={onSubmit} />
    </>
  );
};

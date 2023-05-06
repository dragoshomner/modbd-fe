import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryForm from '../../components/forms/CountryForm';
import { rows } from '../../__mocks__/countries.mock';

export const EditCountry = () => {
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
        <h1>Edit Country</h1>
        <CountryForm data={data} onSubmit={onSubmit} />
    </>
  );
};

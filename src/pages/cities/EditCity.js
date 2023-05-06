import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityForm from '../../components/forms/CityForm';
import { rows } from '../../__mocks__/cities.mock';

export const EditCity = () => {
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
        <h1>Edit City</h1>
        <CityForm data={data} onSubmit={onSubmit} />
    </>
  );
};

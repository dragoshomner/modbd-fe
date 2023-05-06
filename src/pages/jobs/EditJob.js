import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobForm from '../../components/forms/JobForm';
import { rows } from '../../__mocks__/jobs.mock';

export const EditJob = () => {
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
        <h1>Edit Job</h1>
        <JobForm data={data} onSubmit={onSubmit} />
    </>
  );
};

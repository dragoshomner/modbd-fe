import React from 'react';
import { CitiesTable } from '../../components/tables/CitiesTable';
import { rows } from '../../__mocks__/cities.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const CitiesList = () => {
  return (
    <>
      <ListHeader createLinkEntity="cities" />
      <CitiesTable rows={rows} />
    </>
  );
};
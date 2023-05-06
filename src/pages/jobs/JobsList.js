import React from 'react';
import { JobsTable } from '../../components/tables/JobsTable';
import { rows } from '../../__mocks__/jobs.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const JobsList = () => {
  return (
    <>
      <ListHeader createLinkEntity="jobs" />
      <JobsTable rows={rows} />
    </>
  );
};
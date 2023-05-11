import React, { useEffect, useContext } from 'react';
import { JobsTable } from '../../components/tables/JobsTable';
import { rows as mockedRows } from '../../__mocks__/jobs.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';
import { RegionContext } from '../../data/context/RegionProvider';
import { fetchAllJobs } from '../../data/requests/jobs';
import { isSuccessful } from '../../data/requests/response';

export const JobsList = () => {
  const [rows, setRows] = React.useState([]);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    fetchAllJobs(region).then((response) => {
      // TODO: mockedRows must me replaced with []
      const rows = isSuccessful(response) ? response.data : mockedRows;
      setRows(rows);
    })
  }, [region]);

  return (
    <>
      <ListHeader createLinkEntity="jobs" />
      <JobsTable rows={rows} />
    </>
  );
};
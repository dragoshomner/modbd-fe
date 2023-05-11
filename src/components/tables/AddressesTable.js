import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const AddressesTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Postal Code</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>City Id</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.addressId}
              </TableCell>
              <TableCell>{row.street}</TableCell>
              <TableCell>{row.addressNumber}</TableCell>
              <TableCell>{row.postalCode}</TableCell>
              <TableCell>{row.notes}</TableCell>
              <TableCell>{row.cityId}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/addresses/${row.addressId}`}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
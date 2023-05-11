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

export const ReservationsTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Check-In</TableCell>
            <TableCell>Check-Out</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Room Id</TableCell>
            <TableCell>Client Id</TableCell>
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
                {row.reservationId}
              </TableCell>
              <TableCell>{row.checkInDate}</TableCell>
              <TableCell>{row.checkOutDate}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.roomId}</TableCell>
              <TableCell>{row.clientId}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/reservations/${row.reservationId}`}>
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
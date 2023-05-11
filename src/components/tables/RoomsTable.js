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
import Checkbox from '@mui/material/Checkbox';

export const RoomsTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Floor</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Smoking</TableCell>
            <TableCell>Hotel Id</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows && rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.roomId}
              </TableCell>
              <TableCell>{row.roomNumber}</TableCell>
              <TableCell>{row.floor}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell><Checkbox disabled checked={row.smoking} /></TableCell>
              <TableCell>{row.hotelId}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/rooms/${row.roomId}`}>
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
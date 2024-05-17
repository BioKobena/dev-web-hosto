import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const people = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
  { id: 3, name: 'Alice Johnson', age: 40, gender: 'Female' },
];

const Consultation = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.age}</TableCell>
              <TableCell>{person.gender}</TableCell>
              <TableCell>
                <Link to={`/medecin/consultation/${person.id}`}>View Details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Consultation;

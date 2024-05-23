import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const people = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Home', status: "Pending" },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Femme', status: "Pending" },
  { id: 3, name: 'Alice Johnson', age: 40, gender: 'Femme', status: "Pending" },
];

const RdvMed = () => {
  return (
    <div className="w-full mt-7 overflow-hidden">
      <TableContainer sx={{ m: 1, padding: 2 }} component={Paper}>
        <Typography variant='h4' sx={{ textAlign: "center", p: 2, fontWeight: "700" }}>Consultez vos rendez-vous en cours</Typography>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Nom</TableCell>
              <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Prénoms</TableCell>
              <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Sexe</TableCell>
              <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white", textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell sx={{ fontWeight: "600", }}>{person.name}</TableCell>
                <TableCell sx={{ fontWeight: "600", }}>{person.age}</TableCell>
                <TableCell sx={{ fontWeight: "600", }}>{person.gender}</TableCell>
                <TableCell sx={{ fontWeight: "600", textAlign: "center" }}>
                  <Link to={`/medecin/consultation/${person.id}`}>{
                    <button className='bg-green-800 text-white p-3 rounded-md font-semibold w-40'>Aperçu</button>
                  } </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RdvMed;

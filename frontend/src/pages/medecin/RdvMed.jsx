import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RdvMed = () => {
  const [rdvs, setRdvs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRdvs = async () => {
      try {
        const response = await fetch('http://localhost:8888/hosto-project/medecin/get_all_rdv.php');
        if (response.ok) {
          const data = await response.json();
          setRdvs(data.data);
        } else {
          console.error('Erreur lors de la récupération des rendez-vous:', response.status);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRdvs();
  }, []);

  return (
    <div className="w-full mt-7 overflow-hidden">
      <TableContainer sx={{ m: 1, padding: 2 }} component={Paper}>
        <Typography variant='h4' sx={{ textAlign: "center", p: 2, fontWeight: "700" }}>Consultez vos rendez-vous en cours</Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Numéro de dossier</TableCell>
                <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Motif</TableCell>
                <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Jour </TableCell>
                <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Heure</TableCell>
                <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white" }}>Statut</TableCell>
                <TableCell sx={{ fontWeight: "800", backgroundColor: "rgb(34 211 238)", color: "white", textAlign: "center" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rdvs.map((rdv) => (
                <TableRow key={rdv.id}>
                  <TableCell sx={{ fontWeight: "600", }}>{rdv.numerodossier}</TableCell>
                  <TableCell sx={{ fontWeight: "600", }}>{rdv.motif}</TableCell>
                  <TableCell sx={{ fontWeight: "600", }}>{rdv.date_rdv}</TableCell>
                  <TableCell sx={{ fontWeight: "600", }}>{rdv.heure_rdv}</TableCell>
                  <TableCell sx={{ fontWeight: "600", }}>{rdv.statut === 'terminé' ? <CheckCircleIcon color="success" /> : <CircularProgress />}</TableCell>
                  <TableCell sx={{ fontWeight: "600", textAlign: "center" }}>
                    <Link to={`/medecin/consultation/${rdv.numerodossier}`}>
                      <button className='bg-green-800 text-white p-3 rounded-md font-semibold w-40'>Voir</button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default RdvMed;

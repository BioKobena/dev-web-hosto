import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Consultation = () => {
  const [dossiers, setDossiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDossiers = async () => {
      try {
        const response = await axios.get('http://localhost:8888/hosto-project/dossier/get_all_dossiers.php');
        if (response.data.status === "success") {
          setDossiers(response.data.data);
          setLoading(false);
        } else {
          setError(response.data.message);
          setLoading(false);
        }
      } catch (err) {
        setError("Erreur de requête");
        setLoading(false);
      }
    };
    fetchDossiers();
  }, []);

  return (
    <div className="bg-gray-50 w-full mt-7 overflow-hidden">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center p-4">Liste des patients à consulter</h1>
        {loading ? (
          <p>Chargement...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nom</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Prénoms</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sexe</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Statut</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {dossiers.map((dossier) => (
                <tr key={dossier.NUMERODOSSIER}>
                  <td className="text-left py-3 px-4">{dossier.NOM}</td>
                  <td className="text-left py-3 px-4">{dossier.PRENOM}</td>
                  <td className="text-left py-3 px-4">{dossier.SEXE}</td>
                  <td className="text-left py-3 px-4">
                    {dossier.statut === 'Pending' ? (
                      <CheckCircleIcon color="success" />
                    ) : (
                      <CircularProgress size={20} />

                    )}
                  </td>
                  <td className="text-left py-3 px-4">
                    <Link to={`/medecin/consultation/${dossier.NUMERODOSSIER}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {dossier.STATUS === 'Pending' ? 'Consulter' : 'Voir les détails'}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Consultation;

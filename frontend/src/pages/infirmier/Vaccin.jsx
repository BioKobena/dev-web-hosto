import React, { useState } from 'react';
import axios from 'axios';

const Vaccin = () => {
  const [numerodossier, setNumerodossier] = useState('');
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState('');
  const [typeDeGain, setTypeDeGain] = useState('');
  const [description, setDescription] = useState('');
  const [soins, setSoins] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNumerodossier(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8888/hosto-project/dossier/get_dossier.php', {
        params: { numerodossier }
      });
      if (response.data.status === "success") {
        setPatient(response.data.data);
        setError('');
        fetchSoins(response.data.data.NUMERODOSSIER);
      } else {
        setPatient(null);
        setError(response.data.message);
      }
    } catch (err) {
      setPatient(null);
      setError("Erreur de requête");
    }
  };

  const fetchSoins = async (numerodossier) => {
    try {
      const response = await axios.get('http://localhost:8888/hosto-project/infirmier/get_soins.php', {
        params: { numerodossier }
      });
      setSoins(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des soins");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = editIndex !== null ? 'update_soin.php' : 'add_soin.php';
      const response = await axios.post(`http://localhost:8888/hosto-project/infirmier/${endpoint}`, {
        idsoin: editIndex !== null ? soins[editIndex].IDSOIN : null,
        numerodossier: patient.NUMERODOSSIER,
        typedegain: typeDeGain,
        description: description,
      });
      if (response.data.status === "success") {
        if (editIndex !== null) {
          const updatedSoins = [...soins];
          updatedSoins[editIndex] = { ...updatedSoins[editIndex], TYPEDEGAIN: typeDeGain, DESCRIPTION: description };
          setSoins(updatedSoins);
          setEditIndex(null);
        } else {
          setSoins([...soins, { IDSOIN: response.data.idsoin, TYPEDEGAIN: typeDeGain, DESCRIPTION: description, DATESOIN: new Date().toISOString() }]);
        }
        setTypeDeGain('');
        setDescription('');
      }
    } catch (err) {
      console.error("Erreur lors de l'ajout ou de la mise à jour du soin");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTypeDeGain(soins[index].TYPEDEGAIN);
    setDescription(soins[index].DESCRIPTION);
  };

  const handleDelete = async (idsoin, index) => {
    try {
      const response = await axios.post('http://localhost:8888/hosto-project/infirmier/delete_soin.php', { idsoin });
      if (response.data.status === "success") {
        const updatedSoins = soins.filter((_, i) => i !== index);
        setSoins(updatedSoins);
      }
    } catch (err) {
      console.error("Erreur lors de la suppression du soin");
    }
  };

  return (
    <div className='w-2/5'>
      <label htmlFor="numerodossier" className="block mb-2 text-xl font-semibold text-gray-900 dark:text-white text-center">
        Entrez l'identifiant du patient
      </label>
      <input
        type="text"
        name="numerodossier"
        id="numerodossier"
        placeholder="Identifiant"
        className="bg-gray-50 border border-gray-300 w-96 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={numerodossier}
        onChange={handleInputChange}
      />
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={handleSearch}
      >
        Rechercher
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {patient && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Informations du patient :</h3>
          <p className="mb-2"><span className="font-semibold">Nom:</span> {patient.NOM}</p>
          <p className="mb-2"><span className="font-semibold">Prénom:</span> {patient.PRENOM}</p>
          <p className="mb-2"><span className="font-semibold">Date de naissance:</span> {patient.DATENAISSANCE}</p>
          <p className="mb-2"><span className="font-semibold">Sexe:</span> {patient.SEXE}</p>
          <p className="mb-2"><span className="font-semibold">Groupe sanguin:</span> {patient.GROUPESANGUIN}</p>
          <p className="mb-6"><span className="font-semibold">Antécédants:</span> {patient.ANTECEDANTS}</p>

          <h3 className="text-xl font-semibold mb-4">Ajouter ou Modifier un Soin</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Type de Soin:</span>
              <select value={typeDeGain} onChange={(e) => setTypeDeGain(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Sélectionner</option>
                <option value="Vaccin">Vaccin</option>
                <option value="Pansement">Pansement</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Description:</span>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="3" />
            </label>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              {editIndex !== null ? 'Modifier' : 'Ajouter'}
            </button>
          </form>

          <h3 className="text-xl font-semibold mt-6 mb-4">Historique des Soins</h3>
          <ul className="space-y-2 flex flex-wrap gap-2">
            {soins.map((soin, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm">
                <span>{soin.TYPEDEGAIN}: {soin.DESCRIPTION} ({new Date(soin.DATESOIN).toLocaleString()})</span>
                <br />
                <div className="space-x-2 flex flex-col gap-2">
                  <button onClick={() => handleEdit(index)} className="px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Modifier</button>
                  <button onClick={() => handleDelete(soin.IDSOIN, index)} className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Supprimer</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Vaccin;

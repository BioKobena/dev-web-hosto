import React, { useState } from 'react';
import axios from 'axios';

const Ancien = () => {
    const [numerodossier, setNumerodossier] = useState('');
    const [patientData, setPatientData] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setNumerodossier(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:8888/hosto-project/dossier/get_dossier.php', {
                params: { numerodossier }
            });
            if (response.data.status === "success") {
                setPatientData(response.data.data);
                setError('');
            } else {
                setPatientData(null);
                setError(response.data.message);
            }
        } catch (err) {
            setPatientData(null);
            setError("Erreur de requête");
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
            {patientData && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Informations du patient :</h3>
                    <p>Nom: {patientData.NOM}</p>
                    <p>Prénom: {patientData.PRENOM}</p>
                    <p>Date de naissance: {patientData.DATENAISSANCE}</p>
                    <p>Lieu de naissance: {patientData.LIEUNAISSANCE}</p>
                    <p>Sexe: {patientData.SEXE}</p>
                    <p>Profession: {patientData.PROFESSION}</p>
                    <p>Contact: {patientData.CONTACT}</p>
                    <p>Email: {patientData.EMAIL}</p>
                    <p>Groupe sanguin: {patientData.GROUPESANGUIN}</p>
                    <p>Antécédants: {patientData.ANTECEDANTS}</p>
                    <p>Habitation: {patientData.HABITATION}</p>
                </div>
            )}
        </div>
    );
};

export default Ancien;

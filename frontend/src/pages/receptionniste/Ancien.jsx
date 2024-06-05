import React, { useState } from 'react';
import axios from 'axios';

const Ancien = () => {
    const [numerodossier, setNumerodossier] = useState('');
    const [patientData, setPatientData] = useState(null);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [rdvData, setRdvData] = useState({
        dateRdv: '',
        heureRdv: '',
        motif: ''
    });

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

    const handleRdvChange = (e) => {
        const { name, value } = e.target;
        setRdvData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRdvSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8888/hosto-project/medecin/add_rdv.php', {
                numerodossier,
                date_rdv: rdvData.dateRdv,
                heure_rdv: rdvData.heureRdv,
                motif: rdvData.motif
            });
            if (response.data.status === 'success') {
                alert('Rendez-vous ajouté avec succès');
                setShowModal(false);
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            alert('Erreur lors de l\'ajout du rendez-vous');
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
                    <button 
                        className="mt-4 bg-green-500 text-white p-2 rounded"
                        onClick={() => setShowModal(true)}
                    >
                        Prendre RDV
                    </button>
                </div>
            )}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded">
                        <h2 className="text-xl font-semibold mb-4">Prendre un rendez-vous</h2>
                        <div>
                            <label htmlFor="dateRdv" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date RDV</label>
                            <input 
                                type="date" 
                                name="dateRdv" 
                                id="dateRdv" 
                                value={rdvData.dateRdv}
                                onChange={handleRdvChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label htmlFor="heureRdv" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heure RDV</label>
                            <input 
                                type="time" 
                                name="heureRdv" 
                                id="heureRdv" 
                                value={rdvData.heureRdv}
                                onChange={handleRdvChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label htmlFor="motif" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Motif</label>
                            <textarea 
                                name="motif" 
                                id="motif" 
                                value={rdvData.motif}
                                onChange={handleRdvChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            ></textarea>
                        </div>
                        <button 
                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                            onClick={handleRdvSubmit}
                        >
                            Ajouter RDV
                        </button>
                        <button 
                            className="mt-4 bg-red-500 text-white p-2 rounded ml-4"
                            onClick={() => setShowModal(false)}
                        >
                            Annuler
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ancien;

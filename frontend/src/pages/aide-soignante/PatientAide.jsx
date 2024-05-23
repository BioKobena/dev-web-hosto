import React, { useState, useEffect } from 'react';
import { Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Modal, Box, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function PatientAide() {
    const [patients, setPatients] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [formData, setFormData] = useState({
        poids: '',
        taille: '',
        temperature: '',
        tension: '',
    });

    useEffect(() => {
        fetch('http://localhost:8888/hosto-project/aide-soignante/get_patients.php')
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.error('Error fetching patients:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = { ...formData, NUMERODOSSIER: selectedPatient.NUMERODOSSIER };

        fetch('http://localhost:8888/hosto-project/aide-soignante/update_dossier.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleCloseModal();
        })
        .catch(error => console.error('Error updating patient:', error));
    };

    const handleRowClick = (patient) => {
        setSelectedPatient(patient);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <h1 className='text-3xl font-semibold text-sky-900 text-center p-4'>Constantes à prendre</h1>
            <TableContainer component={Paper} style={{ padding: 5 }} elevation={1}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }}>Nom</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Prénom</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Date de naissance</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Lieu de naissance</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Sexe</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Profession</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Contact</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Email</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Groupe sanguin</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Antécédents</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white", fontWeight: "900" }} align="left">Habitation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients.map((patient) => (
                            <TableRow
                                key={patient.NUMERODOSSIER}
                                onClick={() => handleRowClick(patient)}
                                sx={{ cursor: "pointer", '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{patient.NOM}</TableCell>
                                <TableCell align="left">{patient.PRENOM}</TableCell>
                                <TableCell align="left">{patient.DATENAISSANCE}</TableCell>
                                <TableCell align="left">{patient.LIEUNAISSANCE}</TableCell>
                                <TableCell align="left">{patient.SEXE}</TableCell>
                                <TableCell align="left">{patient.PROFESSION}</TableCell>
                                <TableCell align="left">{patient.CONTACT}</TableCell>
                                <TableCell align="left">{patient.EMAIL}</TableCell>
                                <TableCell align="left">{patient.GROUPESANGUIN}</TableCell>
                                <TableCell align="left">{patient.ANTECEDANTS}</TableCell>
                                <TableCell align="left">{patient.HABITATION}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            width: 800,
                            maxWidth: '90%',
                            border: "none",
                            borderRadius: 5
                        }}
                    >
                        <h1 className='bg-gray-100 p-3 text-2xl text-sky-800 text-center font-semibold'>Prise des constantes</h1>
                        <h2 className='text-xl text-center font-semibold p-2' id="modal-title">{selectedPatient && `${selectedPatient.NOM} ${selectedPatient.PRENOM}`}</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="poids" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poids</label>
                                <input
                                    required
                                    type="text"
                                    name="poids"
                                    id="poids"
                                    value={formData.poids}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Poids"
                                />
                            </div>
                            <div>
                                <label htmlFor="tension" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tension</label>
                                <input
                                    required
                                    type="text"
                                    name="tension"
                                    id="tension"
                                    value={formData.tension}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Tension"
                                />
                            </div>
                            <div>
                                <label htmlFor="taille" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taille</label>
                                <input
                                    required
                                    type="text"
                                    name="taille"
                                    id="taille"
                                    value={formData.taille}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Taille"
                                />
                            </div>
                            <div>
                                <label htmlFor="temperature" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temperature</label>
                                <input
                                    required
                                    type="text"
                                    name="temperature"
                                    id="temperature"
                                    value={formData.temperature}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Temperature"
                                />
                            </div>
                            <button type="submit" className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enregistrer les informations</button>
                        </form>
                    </Box>
                </Modal>
            </TableContainer>
        </>
    );
}

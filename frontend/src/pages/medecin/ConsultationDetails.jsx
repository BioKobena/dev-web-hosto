import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ConsultationDetails = () => {
    const { numerodossier } = useParams();
    const [diagnostic, setDiagnostic] = useState('');
    const [prescription, setPrescription] = useState('');
    const [actemedical, setActeMedical] = useState('');
    const [constantes, setConstantes] = useState('');
    const [dateControle, setDateControle] = useState('');
    const [observations, setObservations] = useState('');

    const [patientData, setPatientData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/hosto-project/dossier/get_dossier.php', {
                    params: { numerodossier }
                });
                if (response.data.status === "success") {
                    setPatientData(response.data.data);
                    setError('');
                } else {
                    setError(response.data.message);
                }
            } catch (err) {
                setError("Erreur de requête");
            }
        };

        fetchPatientData();
    }, [numerodossier]);

    useEffect(() => {
        if (patientData) {
            window.document.title = `Consultation de ${patientData.NOM}`;
        }
    }, [patientData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier que la date de contrôle est une date future
        const today = new Date().toISOString().split('T')[0];
        if (dateControle <= today) {
            setError("La date de contrôle doit être une date future");
            toast.warn("La date de contrôle doit être une date future !!!");
            return;
        }
        try {
            if (!diagnostic || !prescription || !actemedical || !constantes || !dateControle || !observations) {
                setError("Veuillez remplir tous les champs");
                toast.warn("Veuillez remplir tous les champs !!!")
                return;
            }

            const response = await axios.post('http://localhost:8888/hosto-project/medecin/add_consultation.php', {
                numerodossier,
                diagnostic,
                prescription,
                actemedical,
                dateControle,
                observations,
                constantes
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response.data)
            if (response.data.status === "success") {
                toast.info(response.data.message)
                setDiagnostic("")
                setPrescription("")
                setActeMedical("")
                setDateControle("")
                setObservations("")
                setConstantes("")
                // Rediriger ou afficher un message de succès
            } else {
                toast.error(response.data.message)
                setError(response.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.warn(error)
            setError("Erreur lors de l'ajout de la consultation");
        }
    };


    return (
        <div className="w-screen flex justify-center items-center gap-5">
            <div className="w-2/5 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 rounded-lg">
                <h1 className="text-xl text-center leading-tight m-1 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Informations sur le dossier et les constantes de <span className='text-green-800 font-bold'> {patientData ? patientData.NOM + " " + patientData.PRENOM : ''}</span>
                </h1>
                {patientData ? (
                    <div className="p-8 flex flex-col justify-center items-start gap-2">
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Nom : {patientData.NOM}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Prénoms : {patientData.PRENOM}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Date de naissance : {patientData.DATENAISSANCE}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Lieu de naissance : {patientData.LIEUNAISSANCE}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Sexe : {patientData.SEXE}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Profession : {patientData.PROFESSION}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Groupe sanguin : {patientData.GROUPESANGUIN}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Antécédants : {patientData.ANTECEDANTS}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-blue-900 font-semibold rounded-lg block w-full p-2.5">Habitation : {patientData.HABITATION}</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-red-900 font-semibold rounded-lg block w-full p-2.5">Temperature : {patientData.temperature} °</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-red-900 font-semibold rounded-lg block w-full p-2.5">Tension :{patientData.tension} mm Hg</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-red-900 font-semibold rounded-lg block w-full p-2.5">Poids : {patientData.poids} kg</p>
                        <p className="bg-gray-50 border-0 border-gray-300 leading-tight text-red-900 font-semibold rounded-lg block w-full p-2.5">Taille : {patientData.taille} cm</p>
                    </div>
                ) : (
                    <p className="text-red-500">{error ? error : "Aucune information disponible"}</p>
                )}
            </div>

            <div className="w-full bg-white rounded-lg sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-8">
                <h1 className="text-xl font-semibold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Observations
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="diagnostic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diagnostic</label>
                        <input
                            required
                            type="text"
                            name="diagnostic"
                            id="diagnostic"
                            value={diagnostic}
                            onChange={(e) => setDiagnostic(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="prescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescription</label>
                        <input
                            required
                            type="text"
                            name="prescription"
                            id="prescription"
                            value={prescription}
                            onChange={(e) => setPrescription(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="acteMedical" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acte médical</label>
                        <input
                            required
                            type="text"
                            name="acteMedical"
                            id="acteMedical"
                            value={actemedical}
                            onChange={(e) => setActeMedical(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="constantes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Constantes</label>
                        <input
                            required
                            type="text"
                            name="constantes"
                            id="constantes"
                            value={constantes}
                            onChange={(e) => setConstantes(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="dateControle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de contrôle</label>
                        <input
                            required
                            type="date"
                            name="dateControle"
                            id="dateControle"
                            value={dateControle}
                            onChange={(e) => setDateControle(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="observations" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observations</label>
                        <textarea
                            id="observations"
                            rows="4"
                            value={observations}
                            onChange={(e) => setObservations(e.target.value)}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Observations..."
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Enregistrer
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ConsultationDetails;
